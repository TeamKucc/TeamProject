import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductDeal from '../../components/product/ProductDeal';
import ProductReview from '../../components/product/ProductReview';
import ProductDetail from '../../components/product/ProductDetail';
import ProductImageGallery from '../../components/product/ProductImageGallery';
import { findDeal } from '../../modules/upload';
import { checkDeal, completeReset } from '../../modules/user';
import { readProduct, unloadProduct } from '../../modules/landing';
import { changeField, reviewUpload, readReview } from '../../modules/review';

const ProductReviewContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const [ratingError, setRatingError] = useState(null)

  const {
    product,
    user,
    deal,
    makeDeal,
    dealError,
    complete,
    error,
    write,
    review,
    rating,
  } = useSelector(({ landing, user, upload, review }) => ({
    product: landing.productDetail,
    user: user.user,
    deal: upload.deal,
    makeDeal: upload.makeDeal,
    dealError: user.dealError,
    complete: user.complete,
    error: review.error,
    write: review.write,
    rating: review.rating,
    review: review.review,
  }));

  const { id } = match.params;

  useEffect(() => {
    const { id } = match.params;
    dispatch(readProduct(id));
    dispatch(findDeal(id));
    dispatch(readReview(id));
    return () => {
      dispatch(unloadProduct());
    };
  }, [dispatch]);

  const onCheck = () => {
    dispatch(checkDeal({ user: user, product: product._id }));
  };

  const onClick = (e) => {
    e.preventDefault();
    
    if([write, rating].includes('')){
        setRatingError('별점과 리뷰를 등록해주세요')
        return
    }

    dispatch(
      reviewUpload({
        user,
        id,
        write,
        rating,
      }),
    );
    window.location.reload();
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const changeRating = (value) => {
    dispatch(
      changeField({
        key: 'rating',
        value,
      }),
    );
  };

  ///Deal 참여&&성공 여부 확인시 결제 페이지로 이동
  useEffect(() => {
    if (complete) {
      history.push(`/product/order/${product._id}`);
    }
    return()=>{
      dispatch(completeReset())
    }
  }, [dispatch, complete]);

  //?? 정리해야할듯 아래 사항과 중복
  useEffect(() => {
    if (error) {
      alert('상품을 구매해주세요!');
    }
  }, [dispatch, error]);

  //딜 미참여시 예외처리
  useEffect(() => {
    if (dealError) {
      alert('딜에 참여해주세요!');
    }
  }, [dispatch, dealError]);

  useEffect(() => {
    if (makeDeal) {
      window.location.reload();
    }
  }, [makeDeal]);

  return (
    <div className="shop-area pt-100  ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <ProductImageGallery product={product} />
          </div>
          <div className="col-lg-6 col-md-6">
            <ProductDetail
              product={product}
            />
            <div className="col-lg-6 col-md-6">
              <ProductDeal user={user} product={product} deal={deal} onCheck={onCheck}/>
            </div>
          </div>
        </div>
        <ProductReview
          makeDeal={makeDeal}
          onCheck={onCheck}
          onChange={onChange}
          onClick={onClick}
          changeRating={changeRating}
          review={review}
          product={product}
          rating={rating}
          ratingError={ratingError}
        />
      </div>
    </div>
  );
};

export default withRouter(ProductReviewContainer);