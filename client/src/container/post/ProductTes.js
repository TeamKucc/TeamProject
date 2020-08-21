import React, { useEffect } from 'react';
import ProductDescriptionInfo from '../../components/product/ProductTT'
import ProductImageGallery from '../../components/product/ProductImageGallery'
import { useDispatch, useSelector } from 'react-redux'
import { readProduct, unloadProduct } from '../../modules/landing';
import { changeField, reviewUpload, readReview } from '../../modules/review'
import { makeDeal, checkDeal } from '../../modules/user'
import ProductDeal from '../../components/product/ProductDeal';
import { findDeal } from '../../modules/upload';
import { withRouter } from 'react-router-dom';
import ProductDescriptionTab from '../../components/product/ReviewTap'

const ProductTes = ({ match, history, location }) => {
    const dispatch = useDispatch();
    const { product, user, deal, complete, error, write, review, rating } = useSelector(({ landing, user, upload, review }) => ({
        product: landing.productDetail,
        user: user.user,
        deal: upload.deal,
        complete: user.complete,
        error: review.error,
        write: review.write,
        rating: review.rating,
        review: review.review,
    }))

    console.log(review)
    const { id } = match.params

    useEffect(() => {
        const { id } = match.params
        dispatch(readProduct(id))
        dispatch(findDeal(id))
        dispatch(readReview(id))
        return () => {
            dispatch(unloadProduct())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(
            readReview(id)
        )
        console.log(id)
    }, [dispatch])

    const onCheck = () => {
        dispatch(checkDeal(user))
    }

    const onClick = () => {
        dispatch(
            reviewUpload({
                user,
                id,
                write,
                rating,
            })
        )
        window.location.reload()
    }

    const onChange = (e) => {
        console.log(e)
        const { value, name } = e.target
        dispatch(
            changeField({
                key: name,
                value,
            })
        )
    }

    const changeRating = (value) => {
        console.log(value)
        dispatch(
            changeField({
                key: "rating",
                value
            })
        )
    }

    useEffect(() => {
        if (complete) {
            history.push(`/product/order/${product._id}`)
        }
    }, [dispatch, complete])

    useEffect(() => {
        if (error) {
            alert('상품을 구매해주세요!')
        }
    }, [dispatch, error])

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
                            onChange={onChange}
                            onClick={onClick}
                            changeRating={changeRating}
                            review={review}
                        />
                        <div>
                            <ProductDeal user={user} product={product} deal={deal} />
                        </div>
                    </div>
                </div>
                    <ProductDescriptionTab
                        makeDeal={makeDeal}
                        onCheck={onCheck}
                        onChange={onChange}
                        onClick={onClick}
                        changeRating={changeRating}
                        review={review}
                    />
            </div>
        </div>

    )
}

export default withRouter(ProductTes)