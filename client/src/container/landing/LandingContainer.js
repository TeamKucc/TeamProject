import React, { useState, useEffect } from 'react';
import Landing from '../../components/landing/Landing';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { landingProduct } from '../../modules/landing';

const LandingContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const { landing, loading } = useSelector(({ landing, loading }) => ({
    landing: landing.landing,
    landingError: landing.error,
    loading: loading['landing/LANDING_PRODUCT'],
  }));

  useEffect(() => {
    dispatch(landingProduct({}));
  }, [dispatch]);

  console.log(match)
  const { id } = match.params;

  const onClick = (e) => {
    console.log(e.target.value);
    const cate = e.target.value;

    const changeCategory = (cate) => {
      switch (cate) {
        case '패션의류':
          return 'fashion';
          break;
        case '패션잡화':
          return 'accessory';
          break;
        case '뷰티':
          return 'beauty';
          break;
        case '식품':
          return 'food';
          break;
        case '출산/유아동':
          return 'baby';
          break;
        case '디지털/가전':
          return 'digital';
          break;
        case '인테리어':
          return 'interior';
          break;
        case '스포츠/레저':
          return 'sports';
          break;
        case '생활':
          return 'lifestyle';
          break;
      }
    };
    const category = changeCategory(cate);
    history.push('/product/landing/' + category);
  };

  return <Landing Products={landing} onClick={onClick} cate={id} />;
};

export default withRouter(LandingContainer);
