import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Delivery from '../../components/management/Delivery';
import { deliveryUpload, changeField } from '../../modules/delivery';

const DeliveryContainer = ({ match, history }) => {

  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { delivery, deliveryNumber } = useSelector(({ delivery }) => ({
    delivery: delivery.delivery,
    deliveryNumber: delivery.deliveryNumber,
  }));

  const {id} = match.params;

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
	};
  
  const onPublish = (e) => {
    e.preventDefault();
    
    if([delivery, deliveryNumber].includes('')) {
      setError('송장번호와 택배사를 입력해주세요')
      return
    }
      dispatch(
        deliveryUpload({
          id,
          delivery,
          deliveryNumber,
        }),
        alert("제품이 등록되었습니다!"),
        history.push('/product/stock')
      )
	};

  return (
    <div>
      <Delivery
        onChange={onChange}
        onPublish={onPublish}
        delivery={delivery}
        deliveryNumber={deliveryNumber}
        error={error}
      />
    </div>
  );
};

export default withRouter(DeliveryContainer);
