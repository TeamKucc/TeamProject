import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import Register from '../../components/auth/Register';
import { tempSetUser } from '../../modules/user';

const RegisterContainer = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  useEffect(() => {
    if (user) {
      props.history.push('/');
    }
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError('로그인 실패');
      alert('아이디나 비밀번호가 존재하지 않거나 맞지 않습니다');
      return;
    }
    if (auth) {
      props.history.push('/');
      try {
        const userId = localStorage.getItem('userId');
        dispatch(tempSetUser(userId));
      } catch (error) {
        console.log('storage Error error');
      }
    }
  }, [auth, authError]);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { userID, password } = form;
    dispatch(login({ userID, password }));
  };

  return (
    <div>
      <Register
        type="register"
        form="form"
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
    </div>
  );
};
export default withRouter(RegisterContainer);
