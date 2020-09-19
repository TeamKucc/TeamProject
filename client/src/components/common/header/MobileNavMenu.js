import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavMenu = ({ user, onLogout }) => {
  let UserId = null;
  if (user) {
    UserId = user.replace(/['"]+/g, '');
  }

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        {user ? (
          <>
            <li>
              <Link to={`/userInfo/${UserId}`}>내정보</Link>
            </li>
            <li>
              <Link to={'/'} onClick={onLogout}>
                로그아웃
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product/landing/all">Product</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={'/login'}>로그인</Link>
            </li>
            <li>
              <Link to={'/register'}>회원가입</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product/landing/all">Product</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
