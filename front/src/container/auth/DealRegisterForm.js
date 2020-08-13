import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  initializeForm,
  dregister,
  businessNumber
} from '../../modules/auth';
import DealRegisterForm from '../../components/auth/DealRegisterForm';
import { withRouter } from 'react-router-dom';

const BuyerRegisterForm = ({ history }) => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(null);
  const [fail, setFail] = useState(null);
  const [error, setError] = useState(null);
  const { form, auth, authError, user, businessState, businessError } = useSelector(({ auth, user }) => ({
    form: auth.dregister,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
    businessState: auth.businessState,
    businessError:auth.error
  }));


  //인풋 변경이벤트
  const onChange = (e) => {
    // console.log("call")
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'dregister',
        key: name,
        value,
      }),
    );
  };

  const { business } = form

  const onSubmit = (e) => {
    e.preventDefault();
    const { userID, name, password, passwordConfirm, email } = form;

    if (
      [userID, name, password, passwordConfirm, email, business].includes('')
    ) {
      setError('빈칸을 모두 입력해주세요');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 다릅니다');
      return;
    }
    if(success != '사업자 번호인증 성공') {
      setError('사업자번호 인증이 필요합니다')
    }
    dispatch(dregister({ userID, name, password, business, email }));
    history.push('/register/complete')
  };
  
  const onClick = () => {
    dispatch( 
      businessNumber({
        business
      }),
    );
  };

  //컴포넌트가 처음 렌더링 될때 폼 초기화
  useEffect(() => {
    dispatch(initializeForm('dregister'));
  }, [dispatch]);


  useEffect(()=>{
    if(businessError){
      setFail('사업자 번호인증 실패')
      setSuccess('')
      return
    }
  },[businessError])

  useEffect(()=>{
    if(businessState){
      setSuccess('사업자 번호인증 성공')
      setError('')
      setFail('')
      return
    }
  }, [businessState])

  useEffect(() => {
    if (auth) {
      console.log('회원가입성공');
      console.log(auth);
      history.push('/');
    }
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정입니다');
        return;
      }
      setError('회원가입 실패');
      return;
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage Error');
      }
    }
  }, [history, user]);

  return (
    <div>
      <DealRegisterForm
        type="dregister"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onClick}
        success={success}
        fail={fail}
        error={error}
      />
    </div>
  );
};

export default withRouter(BuyerRegisterForm);
