import React, { useEffect } from 'react';
import ProductDescriptionInfo from '../../components/product/ProductTT'
import ProductImageGallery from '../../components/product/ProductImageGallery'
import { useDispatch, useSelector } from 'react-redux'
import { readProduct, unloadProduct } from '../../modules/landing';
import { makeDeal,checkDeal } from '../../modules/user'
import ProductDeal from '../../components/product/ProductDeal';
import { findDeal } from '../../modules/upload';
import { withRouter } from 'react-router-dom';

const ProductTes = ({ match, history, location }) => {
    const dispatch = useDispatch();
    const { product, user, deal, complete,error } = useSelector(({ landing, user, upload }) => ({
        product: landing.productDetail,
        user: user.user,
        deal: upload.deal,
        complete:user.complete,
        error:user.error
    }))
    useEffect(() => {
        console.log(match.params.id)
        const { id } = match.params
        dispatch(readProduct(id))
        dispatch(findDeal(id))
        return () => {
            dispatch(unloadProduct())
        }
    }, [dispatch])

    const onCheck =()=>{
        dispatch(checkDeal(user))
        console.log(complete)
    }
    
    useEffect(()=>{
        console.log(complete)
        if(complete){
            history.push(`/product/order/${product._id}`)
        }
    },[dispatch,complete])

    return (
        <div className="shop-area pt-100  ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <ProductImageGallery product={product} />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ProductDescriptionInfo
                            spaceTopClass="pt-100"
                            spaceBottomClass="pb-100"
                            complete={complete}
                            product={product}
                            makeDeal={makeDeal}
                            onCheck={onCheck}
                        />
                        <div>
                            <ProductDeal user={user} product={product} deal={deal} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withRouter(ProductTes)