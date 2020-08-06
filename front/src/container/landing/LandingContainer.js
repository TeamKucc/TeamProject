import React, { useState, useEffect } from 'react';
import Landing from '../../components/landing/Landing';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { landingProduct } from '../../modules/landing';

const LandingContainer = () => {

  const dispatch = useDispatch();
  const { landing, loading } = useSelector(({ landing, loading }) => ({
    landing: landing.landing,
    landingError: landing.error,
    loading: loading['landing/LANDING_PRODUCT'],
  }));

  useEffect(() => {
    dispatch(landingProduct({}))
  },[dispatch]);

  const delivery = "kr.cjlogistics"
  const number = 632383557514
  const href  = "https://tracker.delivery/#/" + delivery + "/" + number

  // return null
  return (
  <Landing Products={landing} loading={loading} />
  // <div>택배사 : {delivery} 송장번호 : {number}
  // <a href={href} target="_blank">배송조회</a>
  // </div>
  )
}

export default withRouter(LandingContainer);
