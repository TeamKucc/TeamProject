import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../common/Timer';

function Landing({ Products, onClick, cate, onChange, onSearch }) {
  const [layout, setLayout] = useState('list');

  let Prod = Object.keys(Products).map(function (key) {
    return Products[key];
  });

  const productCategories = [];
  const uniqueCategories = Prod.map((product) => {
    if (!productCategories.includes(product.category)) {
      return productCategories.push(product.category);
    }
  });

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const changeCategory = (cate) => {
    switch (cate) {
      case 'fashion':
        return '패션의류';
        break;
      case 'accessory':
        return '패션잡화';
        break;
      case 'beauty':
        return '뷰티';
        break;
      case 'food':
        return '식품';
        break;
      case 'baby':
        return '출산/유아동';
        break;
      case 'digital':
        return '디지털/가전';
        break;
      case 'interior':
        return '인테리어';
        break;
      case 'sports':
        return '스포츠/레저';
        break;
      case 'lifestyle':
        return '생활';
        break;
    }
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const productLanding = (product, index) => {
    return (
      <Fragment key={index}>
        <div>
          <div className="shop-list-wrap mb-30">
            <div className="row">
              <div className="col-xl-4 col-md-5 col-sm-6">
                <div className="product-list-image-wrap">
                  <div className="product-img">
                    <Link to={`/item/${product._id}`}>
                      <img
                        className="default-img img-fluid"
                        src={`${product.thumbnails[0].image.location}`}
                        alt={`productImg-${index}`}
                      />
                      {product.thumbnails.length > 1 ? (
                        <img
                          className="hover-img img-fluid"
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
                    <Timer product={product} />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-md-7 col-sm-6">
                <div className="shop-list-content">
                  <h3>
                    <Link to={`/item/${product._id}`}>{product.title}</Link>
                  </h3>
                  <div className="product-list-price">
                    <Fragment>
                      <span>{numberWithCommas(product.discount)} 원</span>{' '}
                      <span className="old">
                        {numberWithCommas(product.price)} 원
                      </span>
                    </Fragment>
                  </div>
                  <div style={{ maxWidth: '350px' }}>
                    <pre>
                      <p>{product.description}</p>
                    </pre>
                  </div>

                  <div className="shop-list-actions d-flex align-items-center">
                    <div className="shop-list-btn btn-hover mt-15">
                      <a
                        href={'/item/' + product._id}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {' '}
                        상품상세{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className={`sidebar-style mr-30`}>
                <div className="sidebar-widget">
                  <h4 className="pro-sidebar-title">제품검색</h4>
                  <div className="pro-sidebar-search mb-50 mt-25">
                    <form className="pro-sidebar-search-form" action="#">
                      <input
                        type="text"
                        placeholder="검색어를 입력해주세요"
                        name="word"
                        onChange={onChange}
                      />
                      <button onClick={onSearch}>
                        <i className="pe-7s-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <h4 className="pro-sidebar-title">카테고리</h4>
                  <div className="sidebar-widget-list mt-30">
                    {productCategories ? (
                      <ul>
                        {productCategories.map((category, key) => {
                          return (
                            <li key={key}>
                              <div className="sidebar-widget-list-left">
                                <button onClick={onClick} value={category}>
                                  {' '}
                                  <span className="checkmark" />
                                  {category}{' '}
                                </button>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      '진행중인 딜이 없습니다'
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="shop-bottom-area mt-35">
                <div className={`row`}>
                  <Fragment>
                    {Prod.map((product, index) => {
                      if (!product) return null;

                      const category = changeCategory(cate);
                      if (product.category === category) {
                        return product.enable
                          ? productLanding(product, index)
                          : '';
                      } else if (cate === 'all') {
                        return product.enable
                          ? productLanding(product, index)
                          : '';
                      }
                    })}
                  </Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Landing;
