import React, { useEffect } from 'react';
import Stock from '../../components/management/Stock'
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { stockManagement } from '../../modules/management';

const StockContainer = () => {
	const dispatch = useDispatch();
  const { management, loading } = useSelector(({ management, loading }) => ({
    management: management.management,
    managementError: management.managementError,
    loading: loading['management/STOCK_MANAGEMENT'],
  }));

  useEffect(() => {
    dispatch(stockManagement({}))
  },[dispatch]);

	return (
		<Stock Products={management}/>
	);
};
export default withRouter(StockContainer);