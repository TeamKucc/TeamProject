import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDisptch, useSelector } from 'react-redux';
import Landing from '../../components/landing/Landing';
import { landingProduct } from '../../modules/landing';

const LandingContainer = () => {
  const dispatch = useDisptch();

  const {
    thumbnails,
    title,
    price,
    discount,
    landing,
    landingError,
  } = useSelector(({ landing }) => ({
    thumbnails: landing.thumbnails,
    title: landing.title,
    price: landing.price,
    dicount: landing.discount,
    landing: landing.landing,
    landingError: landing.landingError,
  }));

  useEffect(() => {
    dispatch(
      landingProduct({
        thumbnails,
        title,
        price,
        discount,
        landing,
        landingError,
      }),
    );
  });

  return(
      <Landing Products={Products} />
  )
};
