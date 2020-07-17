import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user'
import {withRouter} from 'react-router-dom'
import Cookies from 'react-cookies'
const HeaderContainer = ({history}) => {

    const {user}=useSelector(({user})=>({user:user.user}))
    const dispatch = useDispatch()

    const onLogout = () => {
        console.log('logout call')
        dispatch(logout())
        history.push('/')
    }

    return <Header onLogout={onLogout} user={user} />
}

export default withRouter(HeaderContainer);
