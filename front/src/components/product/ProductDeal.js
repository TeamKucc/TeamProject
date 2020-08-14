import React, { useEffect } from 'react';
import { makeDeal, joinDeal } from '../../modules/user'
import { useDispatch } from 'react-redux'

const ProductDeal = ({ user, product, deal }) => {
    const dispatch = useDispatch()
    console.log(deal)
    const make = () => {
        if (user) {
            dispatch(makeDeal({ user, product: product._id }))
            window.location.reload()
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
    return (
        <div>
            <button onClick={make}>딜생성</button>
            <div>
                {deal.map((index) => {
                    return index.complete ? (
                        <div key={index._id} className="done">
                            {index._id} <button onClick={() => { join(index._id) }}>Join</button>
                        </div>
                    ) : (
                            <div key={index._id}>
                                {index._id} <button onClick={() => { join(index._id) }}>Join</button>
                            </div>
                        )
                }
                )}
            </div>
        </div>
    )
}

export default ProductDeal