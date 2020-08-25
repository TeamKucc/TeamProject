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
  console.log("seller:"+seller)
  useEffect(() => {
    dispatch(stockManagement({seller}));
    return()=>{
      
    }
  }, [dispatch]);
  console.log(management)

  
  return (
    <Stock
      Products={management}
    />
  );
};
export default withRouter(StockContainer);
