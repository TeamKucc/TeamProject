require('dotenv').config();
import User from '../../models/user';
import axios from 'axios';
import xml2js from 'xml2js';

export const register = async (req, res) => {
  const user = new User(req.body);
  const { userID } = user;

  await User.findOne({ userID: userID }, (err, userID) => {
    if (userID) {
      res.status(409).json({
        message: 'ID already exist',
      });
    } else {
      user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          success: true,
        });
      });
    }
  });
};

export const dregister = async (req, res) => {
  const user = new User(req.body);
  const { userID } = user;

  await User.findOne({ userID: userID }, (err, userID) => {
    if (userID) {
      res.status(409).json({
        message: 'ID already exist',
      });
    } else {
      user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          success: true,
        });
      });
    }
  });
};

export const login = (req, res) => {
  User.findOne({ userID: req.body.userID }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: 'Login Failed,ID not Found',
      });
    if(user.isDelete) return res.json({
      loginSuccess:false,
      message:'Deleted Member'
    })
    user.verify(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ login: false, message: 'wrong password' });
      user.generateToken((err, user) => {
        console.log(user);
        if (err) return res.status(400).send(err);
        res.cookie('w_authEXP', user.tokenExp);
        res.cookie('w_auth', user.token).status(200).json({
          login: true,
          userId: user._id,
          role: user.role,
          userName: user.name,
        });
      });
    });
  });
};

export const logout = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '', tokenExp: '' },
    (err, doc) => {
      if (err) return res.status(400).json({ logout: false, message: err });
      return res
        .status(200)
        .cookie('w_auth', null)
        .cookie('w_authEXP', null)
        .send({
          logoutsuccess: true,
        });
    },
  );
};

export const getUser=(req,res)=>{
  let member =[]
  User.find({},(err,result)=>{
    if(err) return res.status(409).json({
      message:'error!:'+err
    })
    result.forEach(element=>{
      if(!element.isDelete){
        member.push(element)
      }
    })
    res.status(200).json(member)
  })
}

export const memberDelete =(req,res)=>{
  console.log(req.body)
  User.findOneAndUpdate({_id:req.body.id},{isDelete:true},(err,result)=>{
    if(err) return res.status(400).json({
      message:'error!:'+err
    })
    res.json(result)
  })
}


export const business = (req, res) => {
  // 국세청 사업자번호 조회 API [POST]
  const postUrl =
    'https://teht.hometax.go.kr/wqAction.do?actionId=ATTABZAA001R08&screenId=UTEABAAA13&popupYn=false&realScreenId=';

  // API 에 raw 로 올라갈 xml 데이터
  const xmlRaw =
    '<map id="ATTABZAA001R08"><pubcUserNo/><mobYn>N</mobYn><inqrTrgtClCd>1</inqrTrgtClCd><txprDscmNo>{CRN}</txprDscmNo><dongCode>15</dongCode><psbSearch>Y</psbSearch><map id="userReqInfoVO"/></map>';
  const CRNumber = req.body.business;
  if (!CRNumber) {
    console.log('매개변수에 사업자등록번호를 입력하십시오');
    return;
  }

  postCRN(CRNumber)
    .catch((err) => console.log(err))
    .then((result) => {
      if (result == '부가가치세 일반과세자 입니다.') {
        return res.status(200).json({
          businessState: true,
        });
      } else {
        return res.status(409).json({
          businessState: false,
        });
      }
    });

  function postCRN(crn) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          postUrl,
          xmlRaw.replace(/\{CRN\}/, crn), // xml 데이터에 사업자등록번호를 추가
          { headers: { 'Content-Type': 'text/xml' } },
        )
        .catch((err) => reject(err))
        .then((result) => {
          getCRNresultFromXml(result['data']) //API 응답의 'data' 텍스트 파싱
            .catch((err) => reject(err))
            .then((CRNumber) => resolve(CRNumber));
        });
    });
  }

  function getCRNresultFromXml(dataString) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(
        dataString, // API 응답의 'data' 에 지정된 xml 값 추출, 파싱
        (err, res) => {
          if (err) reject(err);
          else resolve(res.map.trtCntn[0]); // trtCntn 이라는 TAG 의 값을 get
        },
      );
    });
  }
};
