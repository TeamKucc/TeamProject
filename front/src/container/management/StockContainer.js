import React, { useEffect } from 'react';
import Stock from '../../components/management/Stock'
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { stockManagement } from '../../modules/management';
import { updateUpload } from '../../lib/api/product';
import { setOriginalUpload } from '../../modules/upload';

const StockContainer = ({match, history}) => {

  // console.log(match)
  // console.log(history)

	const dispatch = useDispatch();
  const { management, loading } = useSelector(({ management, loading }) => ({
    management: management.management,
    managementError: management.managementError,
    loading: loading['management/STOCK_MANAGEMENT'],
  }));

  // console.log(management)

  const onCheckedChange = (e) => {
    // enable ? true : false
    console.log(e.target.value)
  }
  const onEdit = () => {
    dispatch(setOriginalUpload(management))
    history.push('/product/stock')
  }
  const onRemove = () => {}

  useEffect(() => {
    dispatch(stockManagement({}))
  },[dispatch])

	return (
		<Stock Products={management} onCheckedChange={onCheckedChange} onEdit={onEdit} onRemove={onRemove} />
	)
};
export default withRouter(StockContainer);