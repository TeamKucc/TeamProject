import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { makeDeal, joinDeal } from '../../modules/user'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
import { useTransition, animated } from 'react-spring'
import List from './List'


const ProductDeal = ({ user, product, deal, review }) => {


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

    
    const [index, setIndex] = useState(0);
 
    const [items, setItems] = useState([
        { title: 'GraphQL changed the way we create software', id: 0 },
        { title: 'Learn about GraphQL language for free in the browser', id: 1 },
        { title: 'Learn how to be a lead frontend engineer with GraphQL-driven React and Apollo applications', id: 2 }
    ]);
    const fadingTextPropsTransition = useTransition(items[index], item => item._id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 220, friction: 120 },
    });

  

    

    if (!deal) return null;
    console.log(deal)
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