import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../../modules/user';
import { readProduct } from '../../modules/landing';
import auth from '../../modules/auth';
import History from '../../components/auth/History'


const HistoryContainer = () => {
    const dispatch = useDispatch()
    const { Sellhistory, user } = useSelector(({ user }) => ({
        Sellhistory: user.history,
        user: user.user,
    }))
    useEffect(() => {
        try {
            dispatch(getHistory(user))
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <div>
            <History Sellhistory={Sellhistory} user={user} />
        </div>
    )
}
export default HistoryContainer