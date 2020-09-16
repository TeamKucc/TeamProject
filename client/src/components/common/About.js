import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';

const About = () => {
  return (
    <Fragment>
      <div className="slider-area">
        <div className="slider-active nav-style-1">
          <Swiper>
            <div
              className={`mt-50 single-slider-2 slider-height-5 d-flex align-items-center bg-img`}
              style={{
                backgroundImage: `url(${'http://localhost:4000/uploads/about/about-1.jpg'})`,
              }}
            >
              <div className="container">
                <div className="col-xl-5 col-lg-7 col-md-8 col-12 ml-100 mr-auto">
                  <div className="slider-content-2 slider-animated-1">
                    <h2>웹딜로 공동구매하고 할인받자!</h2>
                    <h1>WEB DEAL</h1>
                    <h4>판매자는 상품판매, 상품관리 하고</h4>
                    <h4>구매자는 2명만 모이면 상품할인 받고</h4>
                    <div className="slider-btn btn-hover mt-5">
                      <Link to={`/product/landing/all`}>
                        웹딜 바로가기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      <img
				className="about mt-150"
        src={`http://localhost:4000/uploads/about/about-2.jpg`}
      />
    </Fragment>
  );
};

export default About;
