import React, { useEffect } from 'react';
import { sellerHistory } from '../../modules/user';
import Seller from '../../components/management/Seller';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deliveryUpload, changeField } from '../../modules/delivery';
import Sell from '../../components/management/Sell';

const SellerContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { history, user, delivery, deliveryNumber } = useSelector(({ user, delivery }) => ({
    history: user.seller,
    user: user.user,
    delivery: delivery.delivery,
    deliveryNumber: delivery.deliveryNumber,
  }));

  useEffect(() => {
    console.log(user);
    dispatch(sellerHistory(user));
  }, []);

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

const onPublish = (id) => {
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
    <>
      <Sell
        sellhistory={history}
        onChange={onChange}
        onPublish={onPublish}
        delivery={delivery}
        deliveryNumber={deliveryNumber}
      />
    </>
  );
};
export default withRouter(SellerContainer);
