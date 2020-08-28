import React from 'react';
import { useDispatch } from 'react-redux';
import { makeDeal, joinDeal } from '../../modules/user';
import List from './List';

const ProductDeal = ({ user, product, deal, onCheck }) => {
  const dispatch = useDispatch();

  const make = () => {
    if (user) {
      dispatch(makeDeal({ user, product: product._id }));
      window.location.reload();
    } else {
      alert('로그인 필요!');
    }
  };

  const join = (_id) => {
    if (user) {
      dispatch(joinDeal({ user, _id, product: product._id }));
    } else {
      alert('로그인 필요!');
    }
  };

  if (!deal) return null;

  return (
    <div>
      {deal.length == 0 ? (
        ''
      ) : (
        <List
          deal={deal}
          join={join}
          product={product}
          onCheck={onCheck}
          make={make}
        />
      )}
    </div>
  );
};

export default ProductDeal;
