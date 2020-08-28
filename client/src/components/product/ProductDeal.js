import React from 'react';
import PropTypes from "prop-types";
import { makeDeal, joinDeal } from '../../modules/user'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
import List from './List'


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
    }

    const join = (_id) => {
        if (user) {
            console.log(product._id)
            dispatch(joinDeal({ user, _id, product: product._id }))
        } else {
            alert('로그인 필요!')
        }
    }

    

    if (!deal) return null;

    return (
        <div className="deal">
                <Button onClick={make} variant="outline-dark">딜생성</Button>
            <div className="product-list-bg">
                {deal.length == 0 ? (
                    <>
                    </>
                ) : (
                    <>
                            <List deal={deal} join={join} />
                        </>
                    )
                }
            </div>
        </div>
    )
}

ProductDeal.propTypes = {
    deal: PropTypes.array
};

export default ProductDeal