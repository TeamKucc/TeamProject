import React, { useEffect } from 'react';
import { sellerHistory } from '../../modules/user';
import Seller from '../../components/management/Seller'
import {useDispatch,useSelector} from 'react-redux'
import { withRouter } from 'react-router-dom';
import Sell from '../../components/management/Sell';


const SellerContainer = ({match}) => {  
    
    const dispatch = useDispatch()
    const {history,user}  = useSelector(({user})=>({
        history:user.seller,
        user:user.user
    }))


    useEffect(()=>{
        console.log(user)
        dispatch(sellerHistory(user))
    },[])
    return (
        <>
        <Sell sellhistory={history}/>
        </>
    )
}
export default withRouter(SellerContainer)