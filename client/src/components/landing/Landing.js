import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { setActiveSort, setActiveLayout } from '../../helpers/product';
import {
  toggleShopTopFilter,
  getIndividualCategories,
  // setActiveSort,
} from '../../helpers/product';

function Landing({ Products, onClick, cate, onChange, onSearch }) {
  const [layout, setLayout] = useState('list');

  const productCount = Products.length;

  let Prod = Object.keys(Products).map(function (key) {
    return Products[key];
  });

  const uniqueCategories = getIndividualCategories(Prod);

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

  const productLanding = Prod.map((product, index) => {
    if (!product) return null;

    const category = changeCategory(cate);
    if (product.category == category) {
      return (
        <Fragment>
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
                      <div className="product-img-badges">
                        <span className="pink">-{product.discount}%</span>
                      </div>
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
                        <span>{product.discount}</span>{' '}
                        <span className="old">{product.price}</span>
                      </Fragment>
                    </div>
                    <p>{product.description}</p>

                    <div className="shop-list-actions d-flex align-items-center">
                      <div className="shop-list-btn btn-hover">
                        <a
                          href={'/item/' + product._id}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {' '}
                          PRODUCT DETAIL{' '}
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
    } else if (cate == 'all') {
      return (
        <Fragment>
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
                      <div className="product-img-badges">
                        <span className="pink">-{product.discount}%</span>
                      </div>
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
                        <span>{product.discount}</span>{' '}
                        <span className="old">{product.price}</span>
                      </Fragment>
                    </div>
                    <p>{product.description}</p>

                    <div className="shop-list-actions d-flex align-items-center">
                      <div className="shop-list-btn btn-hover">
                        <a
                          href={'/item/' + product._id}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {' '}
                          PRODUCT DETAIL{' '}
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
    }
  });

  return (
    <Fragment>
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className={`sidebar-style mr-30`}>
                {/* shop search */}
                <div className="sidebar-widget">
                  <h4 className="pro-sidebar-title">Search </h4>
                  <div className="pro-sidebar-search mb-50 mt-25">
                    <form className="pro-sidebar-search-form" action="#">
                      <input
                        type="text"
                        placeholder="Search here..."
                        name="word"
                        onChange={onChange}
                      />
                      <button onClick={onSearch}>
                        <i className="pe-7s-search" />
                      </button>
                    </form>
                  </div>
                </div>

                {/* filter by categories */}
                <div className="sidebar-widget">
                  <h4 className="pro-sidebar-title">Categories</h4>
                  <div className="sidebar-widget-list mt-30">
                    {uniqueCategories ? (
                      <ul>
                        {uniqueCategories.map((category, key) => {
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
                      'No categories found'
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <Fragment>
                {/* shop top action */}
                <div className="shop-top-bar mb-35">
                  <div className="select-shoing-wrap">
                    <p>Showing {productCount} of result</p>
                  </div>

                  <div className="shop-tab">
                    <button
                      onClick={(e) => {
                        getLayout('list');
                        setActiveLayout(e);
                      }}
                    >
                      <i className="fa fa-list-ul" />
                    </button>
                  </div>
                </div>
              </Fragment>

              {/* shop page content default */}
              <div className="shop-bottom-area mt-35">
                <div className={`row`}>
                  <Fragment>{productLanding}</Fragment>
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
