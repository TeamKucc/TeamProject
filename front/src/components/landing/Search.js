import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ Products, id }) => {
  let Prod = Object.keys(Products).map(function (key) {
    return Products[key];
  });

  // 별점
  const ProductRating = ({ ratingValue }) => {
    let rating = [];

    for (let i = 0; i < 5; i++) {
      rating.push(<i className="fa fa-star-o" key={i}></i>);
    }

    if (ratingValue && ratingValue > 0) {
      for (let i = 0; i <= ratingValue - 1; i++) {
        rating[i] = <i className="fa fa-star-o yellow" key={i}></i>;
      }
    }
    return <Fragment>{rating}</Fragment>;
  };

  const renderCards = Prod.map((product, index) => {
    if (!product) return null;

    return (
      <div key={index} className={`col-xl-4 col-sm-6 `}>
        <div className={`product-wrap mb-25"`}>
          <br />
          <div className="product-img">
            <Link to={`/item/${product._id}`}>
              {/* {product.thumbnails.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      className="default-img"
                      src={`${product.thumbnails[index].image.location}`}
                      alt={`productImg-${index}`}
                    />
                  </div>
                );
              })} */}
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
            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <a
                  href={'/product/order/' + product._id}
                  rel="noopener noreferrer"
                  title="결제하기"
                >
                  <i className="pe-7s-piggy" />
                </a>
              </div>
              <div className="pro-same-action pro-cart">
                <a
                  href={product._id}
                  rel="noopener noreferrer"
                  // target="_blank"
                >
                  {' '}
                  제품상세{' '}
                </a>
              </div>
              <div className="pro-same-action pro-quickview">
                <button
                  // onClick={() => setModalShow(true)}
                  title="미리보기"
                >
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={`/item/${product._id}`}>{product.title}</Link>
            </h3>
            {product.stock && product.stock > 0 ? (
              <div className="product-rating">
                <ProductRating ratingValue={product.stock} />
              </div>
            ) : (
              ''
            )}
            <div className="product-price">
              {product.discount !== null ? (
                <Fragment>
                  <span>{product.discount}</span>{' '}
                  <span className="old">{product.price}</span>
                </Fragment>
              ) : (
                <span>{product.discount} </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* 카드 업로드 */}
              <div className="slider-content-3 slider-animated-1 text-center">
                <p className="animated">
                  '{id}' 에 대한 검색결과 입니다 <br />
                </p>
              </div>
              <div className="shop-bottom-area mt-35">
                <div className={`row grid three-column`}>{renderCards}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
