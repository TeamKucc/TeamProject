import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { endTime, unloadProduct } from '../../modules/landing';
import { withRouter } from 'react-router-dom';

const TimeTest = ({deal }) => {
    const dispatch = useDispatch()
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0)
    const [TimerResult, setResult] = useState(null)
    const [stop, setStop] = useState(false)


    useEffect(() => {
        if (!stop && deal) {
            const timer = setTimeout(() => {
                count()
            }, 1000)
            return () => {
                clearTimeout(timer)
            }
        }
    })
    if (!deal) return null
    const count = () => {
        setStart(new Date().getTime())
        setEnd(new Date(deal.created).getTime() + 1000 * 60 * 60 * 24)
        let distance = end - start
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance <= 3000 && end != 0 && start != 0) {
            console.log('miss')
            setStop(true)
            dispatch(endTime({ _id: deal._id }))
        }
            let result = hours + ": "
                + minutes + ": " + seconds + " 남음"
            setResult(result)
    }


    return (
        
            <span>{TimerResult}</span>
        
    )
}

export default withRouter(TimeTest)