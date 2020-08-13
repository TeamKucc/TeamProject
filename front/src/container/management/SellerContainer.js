import React, { useEffect } from 'react';
import { sellerHistory } from '../../modules/user';
import Seller from '../../components/management/Seller'
import {useDispatch,useSelector} from 'react-redux'
import { withRouter } from 'react-router-dom';


const SellerContainer = ({match}) => {  
    
    const dispatch = useDispatch()
    const {history}  = useSelector(({user})=>({
        history:user.seller
    }))


    useEffect(()=>{
        const {id} = match.params
        console.log(id)
        dispatch(sellerHistory(id))
    },[])
    return (
        <>
        <Seller sellhistory={history}/>
        </>
    )
}
export default withRouter(SellerContainer)