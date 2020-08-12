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
  }, [dispatch]);

  return (
  <Landing Products={landing} loading={loading} />
  )
}

export default withRouter(LandingContainer);
