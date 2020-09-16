import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { stockDetail, unloadStock } from '../../modules/management';
import { setOriginalUpload } from '../../modules/upload';
import StockDetail from '../../components/management/StockDetail';

const StockDetailContainer = ({ match, history, location }) => {
  const dispatch = useDispatch();
  const { management } = useSelector(({ management }) => ({
    management: management.management,
  }));
  const { id } = match.params;

  useEffect(() => {
    dispatch(stockDetail(id));
    return () => {
      dispatch(unloadStock());
    };
  }, [dispatch]);

  const onEdit = () => {
    dispatch(setOriginalUpload(management));
    history.push('/product/upload');
  };

  return (
    <div>
      <StockDetail product={management} onEdit={onEdit} />
    </div>
  );
};

export default withRouter(StockDetailContainer);
