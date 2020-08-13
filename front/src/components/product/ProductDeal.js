import React, { useEffect } from 'react';
import { makeDeal, joinDeal } from '../../modules/user'
import { useDispatch } from 'react-redux'

const ProductDeal = ({ user, product, deal }) => {
    const dispatch = useDispatch()

    const make = () => {
        if (user) {
            dispatch(makeDeal({ user, product: product._id }))
            window.location.reload()
        } else {
            alert('로그인 필요!')
        }
    }

    const join = (_id) => {
        dispatch(joinDeal({ user, _id }))
    }

    if (!deal) return null;
    return (
        <div>
            <button onClick={make}>딜생성</button>
            <div>
                {deal.map((index, deals) =>

                    <div key={index}>
                        {index._id} <button onClick={() => { join(index._id) }}>Join</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDeal