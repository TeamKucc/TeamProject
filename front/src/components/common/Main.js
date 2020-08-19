import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import Timer from './Timer'
const Main = ({ products }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0)
  const [tresult, setResult] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      // count()
    }, 1000)
  })


  function count() {
    setStart(new Date().getTime())
    setEnd(new Date().getTime())
    let distance = end - start
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days === 0) {
      let result = hours + "h "
        + minutes + "m " + seconds + "s "
      setResult(result)
    } else {
      let result = days + "day " + hours + "h "
        + minutes + "m " + seconds + "s "
      setResult(result)
    }
  }
  let prod = Object.keys(products).map(function (key) {
    return products[key];
  });

  const sliderData = [];
  sliderData.push({
    image: 'main1.jpg',
    title: 'stylish',
    subtitle: 'Fashion',
    text: 'Fashion Deal Collection',
  });
  sliderData.push({
    image: 'main2.jpg',
    title: 'eating',
    subtitle: 'Food',
    text: 'Food Deal Collection',
  });

  const featureIconData = [];
  featureIconData.push({
    image: 'support-1.png',
    title: '무료배송',
    subtitle: '딜사이트의 전상품 무료배송',
  });
  featureIconData.push({
    image: 'support-2.png',
    title: '48시간 2일',
    subtitle: '모든딜은 2일동안 참여가능',
  });
  featureIconData.push({
    image: 'support-3.png',
    title: '딜할인',
    subtitle: '2명이상 딜참여시 할인가능',
  });

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

  console.log(sliderData);
  return (
    <Fragment>
      {/* 메인 썸네일 */}
      <div className="slider-area">
        <div className="slider-active nav-style-1">
          <Swiper {...params}>
            {sliderData &&
              sliderData.map((single, index) => {
                return (
                  <div key={index._id}>
                    <div
                      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img swiper-slide`}
                      style={{
                        backgroundImage: `url(${
                          'http://localhost:4000/uploads/main/' + single.image
                          })`,
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto">
                            <div className="slider-content-3 slider-animated-1 text-center">
                              <h3 className="animated">{single.title}</h3>
                              <h1 className="animated">{single.subtitle}</h1>
                              <p className="animated">{single.text}</p>
                              <div className="slider-btn btn-hover">
                                <Link
                                  className="animated"
                                  to="/product/landing"
                                >
                                  DEAL NOW
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  <div key={index._id} className="col-md-4">
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
            <h2>New Arrival</h2>
            <p>새로운 딜목록</p>
          </div>
          <div className="row five-column">
            <Fragment>
              {prod.map((product, index) => {

                return (
                  <div key={index._id} className={`col-xl-3 col-md-6 col-lg-4 col-sm-6`}>
                    <div className={`product-wrap-2 mb-25`}>
                      <div className="product-img">
                        <Timer product={product} />
                        <Link to={`/item/${product._id}`}>
                          <img
                            className="default-img"
                            src={`${product.thumbnails[0].image.location}`}
                            alt={`productImg-${index}`}
                          />

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
                        {/* <div className="product-action-2">
                          <button
                            // onClick={() => setModalShow()}
                            title="미리보기"
                          >
                            <i className="fa fa-eye"></i>
                          </button>
                        </div> */}
                      </div>
                      <div className="product-content-2">
                        <div
                          className={`title-price-wrap-2`}
                        >
                          <h3>
                            <Link to={`/item/${product._id}`}>
                              {product.title}
                            </Link>
                          </h3>
                          <div className="price-2">
                            <Fragment>
                              <span>
                                {product.discount}
                              </span>{' '}
                              <span className="old">
                                {product.price}
                              </span>
                            </Fragment>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
