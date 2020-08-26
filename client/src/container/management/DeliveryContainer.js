import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Delivery from '../../components/management/Delivery';
import { withRouter } from 'react-router-dom';
import { deliveryUpload, changeField } from '../../modules/delivery';
import { Button } from '@material-ui/core'

const DeliveryContainer = ({id,close}) => {
  const dispatch = useDispatch();
  const { delivery, deliveryNumber } = useSelector(({ delivery }) => ({
    delivery: delivery.delivery,
    deliveryNumber: delivery.deliveryNumber,
  }));

  const onChange = (e) => {
		console.log(e.target.value)
		console.log(e.target.name)
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
	};
  
  const onPublish = () => {
    console.log(id)
		dispatch(
			deliveryUpload({
        id,
				delivery,
        deliveryNumber,
			})
		)
	};

  return (
    <div>
      <Delivery
        onChange={onChange}
        onPublish={onPublish}
        delivery={delivery}
        deliveryNumber={deliveryNumber}
        close={close}
      />
    </div>
  );
};

export default withRouter(DeliveryContainer);
