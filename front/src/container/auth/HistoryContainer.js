import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../../modules/user';
import { readProduct } from '../../modules/landing';
import auth from '../../modules/auth';


const HistoryContainer = () => {
    const dispatch = useDispatch()
    const { history, product, user,historyProd } = useSelector(({ user, landing }) => ({
        history: user.history,
        product: landing.productDeatail,
        user: user.user,
    }))
    useEffect(() => {
        try {
            dispatch(getHistory(user))
            dispatch(readProduct(historyProd))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(()=>{
        console.log(history)
        dispatch(readProduct(history))
    },[historyProd])
    return (
        <div>

        </div>
    )
}
export default HistoryContainer