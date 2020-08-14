import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user'
import { landingProduct, searchProduct, changeField } from '../../modules/landing'
import { withRouter } from 'react-router-dom'
// import Cookies from 'react-cookies'
// import HEAD from '../../components/common/HEAD'

const HeaderContainer = (props) => {

    const { user, word, landing } = useSelector(({ user, landing }) => ({ 
        user: user.user,
        word: landing.word,
        landing: landing.landing
     }))
    const dispatch = useDispatch()

    const onLogout = () => {
        console.log('logout call')
        dispatch(logout())
        localStorage.removeItem('userId')
        props.history.push('/')
    }
    // <HEAD onLogout={onLogout} user={user} />

    useEffect(() => {
        dispatch(
            landingProduct({})
        )
    }, [dispatch])

    const onClick = (e) => {
        props.history.push('/product/search/' + word)
    }

    const onChange = (e) => {
        console.log(e.target.value)
        const{ value, name } = e.target
        dispatch(
            changeField({
                key: name,
                value,
            }, [dispatch])
        )
    }

    return  <Header onLogout={onLogout} user={user} onClick={onClick} onChange={onChange} />
    
}

export default withRouter(HeaderContainer);
