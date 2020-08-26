import React, { useEffect } from 'react';
import Stock from '../../components/management/Stock';
import { withRouter } from 'react-router-dom';
import { getHistory,UserchangeField } from '../../modules/user';
import { useSelector, useDispatch } from 'react-redux';
import { stockManagement } from '../../modules/management';

const StockContainer = ({ match, history }) => {

  const dispatch = useDispatch();

  const {
    management,
    seller,
    Sellhistory, 
    user
  } = useSelector(({ management, user }) => ({
    management: management.management,
    seller: user.user,
    Sellhistory: user.history,
    user: user.user,
  }));
  console.log("seller:"+seller)
  useEffect(() => {
    dispatch(stockManagement({seller}));
    dispatch(getHistory(user))
    return()=>{
      
    }
  }, [dispatch]);

  const onChange =(e)=>{
    const {index,value} = e.target
    dispatch(
      UserchangeField({
          key: index,
          value,
      })
  )
  }
  return (
    <Stock
      Products={management}
      Sellhistory={Sellhistory}
      onChange={onChange}
    />
  );
};
export default withRouter(StockContainer);
