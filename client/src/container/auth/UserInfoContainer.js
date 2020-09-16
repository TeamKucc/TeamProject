import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../../components/auth/UserInfo';
import { changeField, userInfo } from '../../modules/auth';
import { userUpdate, getHistory } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const UserInfoContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, auth, authError, user, _id, userHistory } = useSelector(
    ({ auth, user }) => ({
      form: auth.userInfo,
      auth: auth.auth,
      authError: auth.authError,
      user: auth.user,
      _id: user.user,
      userHistory: user.history,
    }),
  );

  useEffect(() => {
    try {
      const userId = localStorage.getItem('userId').replace(/['"]+/g, '');
      dispatch(userInfo(userId));
      dispatch(getHistory(userId));
    } catch (error) {
      alert('접근권한이 없습니다');
      history.push('/');
    }
  }, []);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'userInfo',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { userID, name, password, passwordConfirm, email } = form;
    const userId = localStorage.getItem('userId').replace(/['"]+/g, '');

    if ([userID, name, password, passwordConfirm, email].includes('')) {
      setError('빈칸을 모두 입력해주세요');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 다릅니다');
      return;
    }

    dispatch(userUpdate({ userID, name, password, email, userId, _id }));
    alert('내정보 수정이 완료되었습니다');
    window.location.reload();
  };

  return (
    <UserInfo
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      user={user}
      error={error}
      userHistory={userHistory}
    />
  );
};

export default withRouter(UserInfoContainer);
