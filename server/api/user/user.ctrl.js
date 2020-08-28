import User from '../../models/user';
import Pay from '../../models/payment';
import Product from '../../models/product';
import Deal from '../../models/deal';

export const list = (req, res) => {
  if (!req.decode.admin) {
    return res.status(403).json({
      message: 'you are not adimn',
    });
  }
  User.find({}).then((users) => {
    res.json({ users });
  });
};

export const userInfo = (req, res) => {
  const { _id } = req.params;
  User.findOne({ _id: _id }, (err, result) => {
    if (err)
      res.status(404).json({
        message: err,
      });
    res.json(result);
  });
};

export const userUpdate = async (req, res) => {
  const { userID, name, password, email } = req.body;

  User.findOneAndUpdate(
    { _id: req.body._id },
    { userID: userID, name: name, password: password, email: email },
    (err, result) => {
      if (err)
        return res.status(404).json({
          message: 'Changed error',
          Change: false,
        });
      res.json({
        message: 'Success User Infomation Change',
        Change: true,
        result: result,
      });
    },
  );
};

export const gethistory = (req, res) => {
  Pay.find({ user: req.body.user }, (err, result) => {
    if (err)
      return res.status(500).json({
        message: err,
        success: false,
      });
    res.json(result);
  });
};

export const sellHistory = (req, res) => {
  Pay.find({ seller: req.body.user }, (err, result) => {
    if (err)
      return res.status(500).json({
        success: false,
        message: err,
      });
    res.status(200).json(result);
  });
};

export const findDeal = (req, res) => {
  const result = [];
  Deal.find({ product: req.body._id }, (err, DealResult) => {
    if (err)
      res.status(400).json({
        success: false,
        message: err,
      });
    DealResult.forEach((elemet) => {
      if (!elemet.complete && elemet.enable) {
        result.push(elemet);
      }
    });
    res.json(result);
  });
};

function Info(user) {
  return User.findOne({ _id: user });
}

export const makeDeal = async (req, res) => {
  const { user, product } = req.body;
  const userName = await Info(user);
  const deal = new Deal({
    user: user,
    product: product,
    userName: userName.name,
  });
  Deal.findOne(
    { $and: [{ product: req.body.product }, { user: req.body.user }] },
    (err, result) => {
      if (result) {
        res.status(409).json({
          success: false,
          message: '이미 딜을 생성하셨습니다',
        });
      } else {
        deal.save((err, result) => {
          if (err)
            res.status(400).json({
              success: false,
              message: err,
            });
          res.json(result);
        });
      }
    },
  );
};

const DealCompleteCheck = (id) => {
  return Deal.findOne({ _id: id }, (err, result) => {
    if (result.complete) return false;
  });
};

export const joinDeal = async (req, res) => {
  const Complete = await DealCompleteCheck(req.body._id);
  if (Complete.complete) {
    res.status(409).json({
      success: false,
      message: 'Completed Deal',
    });
  } else {
    Deal.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { user: req.body.user } },
      (err, result) => {
        if (err)
          res.status(400).json({
            success: false,
            message: err,
          });
        Product.findOne({ _id: result.product }, (err, resP) => {
          if (resP.person === result.user.length + 1) {
            Deal.findOneAndUpdate(
              { _id: req.body._id },
              { complete: true },
              (err, resultD) => {
                console.log(resultD);
              },
            );
          }
        });
        res.status(200).json({
          message: 'join success',
        });
      },
    );
  }
};

export const checkDeal = (req, res) => {
  Deal.findOne(
    { $and: [{ product: req.body.product }, { user: req.body.user }] },
    (err, result) => {
      if (err)
        return res.status(500).json({
          success: false,
          message: 'server error',
        });
      if (!result) {
        res.status(409).json({
          success: false,
          message: '딜에 참여해주세요!',
        });
      } else {
        res.status(200).json(result.complete);
      }
    },
  );
};

export const endDeal = (req, res) => {
  Deal.findOneAndUpdate(
    { _id: req.body._id },
    { enable: false },
    (err, result) => {
      if (err)
        return res.status(409).json({
          success: false,
          message: 'Error:' + err,
        });
      res.status(200).json({
        success: true,
        message: 'Deal End!!!!',
      });
    },
  );
};

export const roleCheck = (req, res) => {
  const { role } = req.body;
  let token = req.cookies.w_auth;
  User.findOne({ _id: req.body.user }, (err, result) => {
    if (err)
      return res.status(409).json({
        success: false,
        message: 'Error' + err,
      });
    if (result.role != role || result.token != token) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};
