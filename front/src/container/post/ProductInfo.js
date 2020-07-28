import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import  { readProduct, unloadProduct } from '../../modules/landing';
import Product from '../../components/post/Product'
import ProductImage from '../../components/post/ProductImage'

const ProductInfo = ({match,history}) => {
    const {productId} = match.params;
    const dispatch = useDispatch()
    const {product,user} = useSelector(({landing,user})=>({
        product:landing.product,
        user:user.user
    }))
    useEffect(()=>{
        dispatch(readProduct(productId))
        return()=>{
            dispatch(unloadProduct())
        }
    },[dispatch])

    const onclick = async()=>{
        
    }

    return (
        <div>
            <Product info={product} />
            <ProductImage info={product} buyProduct={onclick} />
        </div>
    )
}

export default ProductInfo