import React from 'react';
import PropTypes from 'prop-types';
import { makeDeal, joinDeal } from '../../modules/user';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
<<<<<<< HEAD
import List from './List';

const ProductDeal = ({ user, product, deal, onCheck }) => {
  const dispatch = useDispatch();

  const make = () => {
    if (user) {
      console.log(user.product);
      dispatch(makeDeal({ user, product: product._id }));
      window.location.reload();
    } else {
      alert('로그인 필요!');
=======
import List from './DealList'


const ProductDeal = ({ user, product, deal }) => {


    const dispatch = useDispatch()
    console.log(deal)
    const make = () => {
        if (user) {
            console.log(user.product)
            dispatch(makeDeal({ user, product: product._id }))
            window.location.reload()
        } else {
            alert('로그인 필요!')
        }
>>>>>>> dcbe6a327a43a18ad336a9cb2a878c4ed6a70cd0
    }
  };

  const join = (_id) => {
    if (user) {
      console.log(product._id);
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
            <List deal={deal} join={join} product={product} onCheck={onCheck} make={make}/>
        )}
    </div>
  );
};

ProductDeal.propTypes = {
  deal: PropTypes.array,
};

export default ProductDeal;
