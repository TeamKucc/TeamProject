import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { endTime } from '../../modules/landing';
import { withRouter } from 'react-router-dom';

const TimeTest = ({ match, product }) => {
    const dispatch = useDispatch()
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0)
    const [tresult, setResult] = useState(null)
    const [stop, setStop] = useState(false)
    useEffect(() => {
        if (!stop) {
            setTimeout(() => {
                count()
            }, 1000)
        }

    })
    if (!product) return null
    const count = () => {
        setStart(new Date().getTime())
        setEnd(new Date(product.created).getTime() + 1000 * 60 * 60 * 48)
        let distance = end - start
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance <= 3000 && end != 0 && start != 0) {
            console.log('miss')
            setStop(true)
            dispatch(endTime({ product: product._id }))
        }
        if (days === 0) {
            let result = hours + ": "
                + minutes + ": " + seconds + " 남음"
            setResult(result)
        } else {
            let result = "마감  " + days + " 일전"
            setResult(result)
        }
    }


    return (
            <div className="product-img-badges">
                <span>{tresult}</span>
            </div>
    )
}

export default withRouter(TimeTest)