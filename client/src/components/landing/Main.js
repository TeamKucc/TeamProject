import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import Timer from '../common/Timer'
const Main = ({ products }) => {
  let prod = Object.keys(products).map(function (key) {
    return products[key];
  });

  const sliderData = ['main1.png', 'main2.png'];

  const featureIconData = [
    {
      image: 'support-1.png',
      title: '무료배송',
      subtitle: '전상품 무료배송',
    },
    {
      image: 'support-2.png',
      title: '24/2',
      subtitle: '모든딜은 2일동안 참여가능',
    },
    {
      image: 'support-3.png',
      title: '딜할인',
      subtitle: '2명이상 딜참여시 할인',
    },
  ];

  const params = {
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Fragment>
      {/* 메인 썸네일 */}
      <div className="slider-area">
        <div className="slider-active nav-style-1">
          <Swiper {...params}>
            {sliderData &&
              sliderData.map((single, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img swiper-slide`}
                      style={{
                        backgroundImage: `url(${
                          'http://localhost:4000/uploads/main/' + single
                        })`,
                      }}
                    ></div>
                  </div>
                );
              })}
          </Swiper>
        </div>
      </div>

      {/* 메인 아이콘 */}
      <div className={`support-area pt-100`}>
        <div className="container">
          <div className="row feature-icon-two-wrap">
            {featureIconData &&
              featureIconData.map((single, index) => {
                return (
                  <div key={index} className="col-md-4">
                    <div
                      className={`support-wrap-2 support-shape mb-30 text-center`}
                    >
                      <div className="support-content-2">
                        <img
                          className="animated"
                          src={
                            'http://localhost:4000/uploads/icon/' + single.image
                          }
                          alt=""
                        />
                        <h5>{single.title}</h5>
                        <p>{single.subtitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* 새로운상품 */}
      <div className="product-area pb-60 section-padding-1">
        <div className="container-fluid">
          <div className={`section-title-2 text-center mb-60 pt-100`}>
            <h2>새로운 딜목록</h2>
            <p>매일 새로운 상품을 만나보세요!</p>
          </div>
          <div className="row five-column">
            <Fragment>
              {prod.map((product, index) => (
                <div
                  key={index}
                  className={`col-xl-3 col-md-6 col-lg-4 col-sm-6`}
                >
                  <div className={`product-wrap-2 mb-25`}>
                    <div className="product-img">
                      <Timer product={product} />
                      <Link to={`/item/${product._id}`}>
                        {
                          <img
                            className="default-img"
                            src={`${product.thumbnails[0].image.location}`}
                            alt={`productImg-${index}`}
                          />
                        }

                        {product.thumbnails.length > 1 ? (
                          <img
                            className="hover-img"
                            src={`${product.thumbnails[1].image.location}`}
                            alt=""
                          />
                        ) : (
                          <img
                            className="hover-img"
                            src={`${product.thumbnails[0].image.location}`}
                            alt=""
                          />
                        )}
                      </Link>
                    </div>
                    <div className="product-content-2">
                      <div className={`title-price-wrap-2`}>
                        <h3>
                          <Link to={`/item/${product._id}`}>
                            {product.title}
                          </Link>
                        </h3>
                        <div className="price-2">
                          <Fragment>
                            <span>{numberWithCommas(product.discount)} 원</span>{' '}
                            <span className="old">
                              {numberWithCommas(product.price)} 원
                            </span>
                          </Fragment>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
