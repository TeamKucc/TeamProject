import PropTypes from 'prop-types';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import StarRatings from 'react-star-ratings';

const ProductDescriptionTab = ({ onChange, onClick, changeRating, review }) => {
  let Review = Object.keys(review).map(function (key) {
    return review[key];
  });

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
    return <>{rating}</>;
  };

  const Reviews = Review.map((review, index) => {
    return (
      <div className="review-wrapper" key={index}>
        <div className="single-review">
          <div className="review-content">
            <div className="review-top-wrap">
              <div className="review-left">
                <div className="review-name">
                  <h4>White Lewis</h4>
                </div>
                <div className="review-rating">
                  <ProductRating ratingValue={review.rating} />
                </div>
              </div>
              <div className="review-left"></div>
            </div>
            <div className="review-bottom">
              <p>{review.write}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="description-review-area pb-90 pt-80">
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="productDescription">
                <div className="row">
                  <div className="col-lg-7">
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
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-7">{Reviews}</div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="row">
                            <div className="col-md-10">
                              <div className="rating-form-style mb-10">
                                <div className="star-box">
                                  <span>Your rating:</span>
                                  <div className="ratting-star">
                                    <StarRatings
                                      value={review.rating}
                                      starDimension="20px"
                                      starRatedColor="blue"
                                      changeRating={changeRating}
                                      numberOfStars={5}
                                      name="rating"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                {/* <input placeholder="Email" type="email" /> */}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style mb-10 form-submit">
                                <textarea
                                  name="write"
                                  onChange={onChange}
                                  placeholder="상품에 대한 리뷰를 작성해주세요!"
                                />
                                <input
                                  onClick={onClick}
                                  type="button"
                                  defaultValue="등록하기"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default ProductDescriptionTab;
