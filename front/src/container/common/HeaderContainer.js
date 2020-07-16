import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { dark } from '@material-ui/core/styles/createPalette';
import user from '../../modules/user';

const HeaderContainer = () => {
    const {user} = useSelector(({user})=>({
        
    }))
    return <Header auth={auth} />
}

export default HeaderContainer;
