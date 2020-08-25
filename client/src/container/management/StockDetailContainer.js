import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { stockDetail, unloadStock } from '../../modules/management';
import { setOriginalUpload } from '../../modules/upload'
import StockDetail from '../../components/management/StockDetail';
import { unloadUser } from '../../modules/user';

const StockDetailContainer = ({ match, history, location }) => {
  const { id } = match.params;
  console.log(id)
  const dispatch = useDispatch();
  const { manegementDetail } = useSelector(({ management }) => ({
    manegementDetail: management.manegementDetail,
  }));

  useEffect(() => {
    dispatch(stockDetail(id));
    return()=>{
      dispatch(unloadStock())
    }
  }, [dispatch]);

  console.log(manegementDetail)
  const onEdit = () => {
    dispatch(setOriginalUpload(manegementDetail));
    history.push('/product/upload')
  };

  return (
    <div>
      <StockDetail product={manegementDetail} onEdit={onEdit} />
    </div>
  );
};

export default withRouter(StockDetailContainer);

