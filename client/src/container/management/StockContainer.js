import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getHistory, UserchangeField } from '../../modules/user';
import { stockManagement } from '../../modules/management';
import Stock from '../../components/management/Stock';

const StockContainer = ({ match, history }) => {
  const dispatch = useDispatch();

  const { management, seller, sellerHistory, user } = useSelector(
    ({ management, user }) => ({
      management: management.management,
      seller: user.user,
      sellerHistory: user.history,
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(stockManagement({ seller }));
    dispatch(getHistory(user));
    return () => {};
  }, [dispatch]);

  const onChange = (e) => {
    const { index, value } = e.target;
    dispatch(
      UserchangeField({
        key: index,
        value,
      }),
    );
  };

  return (
    <Stock
      products={management}
      sellerHistory={sellerHistory}
      onChange={onChange}
    />
  );
};
export default withRouter(StockContainer);
