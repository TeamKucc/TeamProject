import React, { useEffect } from 'react';
import Stock from '../../components/management/Stock';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { stockManagement } from '../../modules/management';

const StockContainer = ({ match, history }) => {

  const dispatch = useDispatch();

  const {
    management,
    seller,
  } = useSelector(({ management, user }) => ({
    management: management.management,
    seller: user.user,
  }));

  useEffect(() => {
    dispatch(stockManagement({seller}));
  }, [dispatch]);

  return (
    <Stock
      Products={management}
    />
  );
};
export default withRouter(StockContainer);
