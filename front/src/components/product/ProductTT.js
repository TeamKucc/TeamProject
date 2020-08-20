import PropTypes from 'prop-types';
import React, { Fragment, useState, useEffect } from 'react';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings'
import { reviewSaga } from '../../modules/review';

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  makeDeal,
  onCheck,
  onChange,
  onClick,
  changeRating,
  review,
}) => {
  const [productStock, setProductStock] = useState(0);

  if (!product) return null;

  let Review = Object.keys(review).map(function (key) {
    return review[key];
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

  const Reviews = Review.map((review, index) => {
    return (
      <div key={index}>
        {review.write}
        <div className="shop-list-wrap mb-30">
        <div className="shop-list-content">
          <div className="rating-review">
            <div className="product-list-rating">
              <ProductRating ratingValue={review.rating} />
            </div>
          </div>
        </div>
        {/* {review.rating} */}
      </div>
      </div>
    );
  })

  return (
    <div className="product-details-content ml-70">
      <h2>{product.title}</h2>
      <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <span>{product.discount}</span>{' '}
            <span className="old">{product.price}</span>
          </Fragment>
        ) : (
          <span>빈칸</span>
        )}
      </div>

      <div className="pro-details-list">
        <p>{product.description}</p>
      </div>
      <div className="pro-details-quality">
        <div className="pro-details-cart btn-hover">
          {product.stock > 0 ? (
            <button className="btn-full" onClick={onCheck}>
              결제하기
            </button>
          ) : (
            <button disabled>Out of Stock</button>
          )}
        </div>
      </div>
      <div></div>
      <div className="pro-details-meta">
        <span>Category:{product.category}</span>
      </div>

      {product.tag ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tag.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + '/shop-grid-standard'}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ''
      )}

      <div>
        <input
          name="write"
          onChange={onChange}
          placeholder="상품에 대한 리뷰를 작성해주세요!"
        />
        <button onClick={onClick}>등록하기</button>
        <StarRatings
        value={review.rating}
        starDimension="20px"
        starRatedColor="red"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        />
        {Reviews}
      </div>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object,
};

export default ProductDescriptionInfo;
