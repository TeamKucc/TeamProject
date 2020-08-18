import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { makeDeal, joinDeal } from '../../modules/user'
import { useDispatch } from 'react-redux'
import { propTypes } from 'react-bootstrap/esm/Image';

const ProductDeal = ({ user, product, deal }) => {
    const dispatch = useDispatch()
    console.log(deal)
    const make = () => {
        if (user) {
            console.log(user.product)
            dispatch(makeDeal({ user, product: product._id }))
            // window.location.reload()
        } else {
            alert('로그인 필요!')
        }
    }

    const join = (_id) => {
        if (user) {
            dispatch(joinDeal({ user, _id, product: product._id }))
        } else {
            alert('로그인 필요!')
        }
    }

    if (!deal) return null;
    console.log(deal)
    return (
        <div>
            <button onClick={make}>딜생성</button>
            <div>
                {deal.map((index) => {
                    return <div key={index._id}>
                        {index._id} <button onClick={() => { join(index._id) }}>Join</button>
                    </div>
                }
                )}
            </div>
        </div>
    )
}
ProductDeal.propTypes = {
    deal:PropTypes.array
  };

export default ProductDeal