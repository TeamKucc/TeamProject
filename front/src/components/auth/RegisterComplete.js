import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RegisterComplete = () => {
  return (
    <Fragment>
      <div className="shop-area pt-90 pb-100"></div>
      <div className="container">
        <div className="slider-content-3 slider-animated-1 text-center">
          <div className="support-content-2 pb-20">
                        로고이미지 띄울거임
            {/* <img
              className="animated"
              src="http://localhost:4000/uploads/icon/support-1.png"
              alt=""
            /> */}
          </div>

          <h1>환영합니다!</h1>
          <br />
          <p className="animated">
            회원가입을 환영합니다 <br />
            로그인 후 다양한 딜을 즐겨보세요!
          </p>
          <div className="slider-btn-purple">
            <Link className="animated" to="/login">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterComplete;