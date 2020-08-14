import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  toggleShopTopFilter,
  getIndividualCategories,
  setActiveSort,
} from '../../helpers/product';

function Landing({ Products, onClick, cate }) {
  const [layout, setLayout] = useState('grid three-column');

  const productCount = Products.length;

  let Prod = Object.keys(Products).map(function (key) {
    return Products[key];
  });

  const uniqueCategories = getIndividualCategories(Prod);

  const changeCategory = (cate) => {
    switch (cate) {
      case 'fashion':
        return "패션의류";
        break;
      case 'accessory':
        return "패션잡화";
        break;
      case 'beauty':
        return "뷰티";
        break;
      case 'food':
        return "식품";
        break;
      case 'baby':
        return "출산/유아동";
        break;
      case 'digital':
        return "디지털/가전";
        break;
      case 'interior':
        return "인테리어";
        break;
      case 'sports':
        return "스포츠/레저";
        break;
      case 'lifestyle':
        return "생활";
        break;
    }
  };

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

    const category = changeCategory(cate)
    if (product.category == category) {
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
    } else if (cate == 'all') {
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
    }
  });

  return (
    <Fragment>
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* 필터 */}
              <Fragment>
                <div className="shop-top-bar mb-35">
                  <div className="select-shoing-wrap">
                    <p>Showing {productCount} result</p>
                  </div>

                  <div className="filter-active">
                    <button onClick={(e) => toggleShopTopFilter(e)}>
                      <i className="fa fa-plus"></i> filter
                    </button>
                  </div>
                </div>
                <div
                  className="product-filter-wrapper"
                  id="product-filter-wrapper"
                >
                  <div className="product-filter-wrapper__inner">
                    <div className="row">
                      {/* Product Filter */}
                      <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
                        <div className="product-filter">
                          <h5>Categories</h5>
                          {uniqueCategories ? (
                            <ul>
                              {uniqueCategories.map((category, key) => {
                                return (
                                  <li key={key}>
                                    <button onClick={onClick} value={category}>
                                      {category}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            'No categories found'
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>

              {/* 카드 업로드 */}
              <div className="shop-bottom-area mt-35">
                <div className={`row grid three-column`}>{renderCards}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Landing;
