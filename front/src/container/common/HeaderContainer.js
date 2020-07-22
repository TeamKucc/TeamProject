import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user'
import {withRouter} from 'react-router-dom'
import Cookies from 'react-cookies'
import HEAD from '../../components/common/HEAD'

const HeaderContainer = (props) => {

    const {user}=useSelector(({user})=>({user:user.user}))
    const dispatch = useDispatch()

    const onLogout = () => {
        console.log('logout call')
        dispatch(logout())
        localStorage.removeItem('userId')
        props.history.push('/')
    }


    return <HEAD onLogout={onLogout} user={user} />
}

export default withRouter(HeaderContainer);
