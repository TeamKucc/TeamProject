import React, { useState, useEffect } from 'react';
import Landing from '../../components/landing/Landing';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { landingProduct, changeField } from '../../modules/landing';

const LandingContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const { landing, loading, word } = useSelector(({ landing, loading }) => ({
    landing: landing.landing,
    landingError: landing.error,
    loading: loading['landing/LANDING_PRODUCT'],
    word: landing.word,
  }));

  useEffect(() => {
    dispatch(landingProduct({}));
  }, [dispatch]);

  const { id } = match.params;

  const onSearch = (e) => {
    if (!word) {
      alert('검색어를 입력해주세요!');
      history.push('/');
    } else {
      history.push('/product/search/' + word);
    }
  };

  const onChange = (e) => {
    console.log(e.target.value);
    const { value, name } = e.target;
    dispatch(
      changeField(
        {
          key: name,
          value,
        },
        [dispatch],
      ),
    );
  };

  const onClick = (e) => {
    console.log(e.target);
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

  return (
    <Landing
      Products={landing}
      onClick={onClick}
      cate={id}
      onChange={onChange}
      onSearch={onSearch}
    />
  );
};

export default withRouter(LandingContainer);
