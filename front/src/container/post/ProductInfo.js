import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { readProduct, unloadProduct } from '../../modules/landing';
import Product from '../../components/post/Product'
import ProductImage from '../../components/post/ProductImage'
import { withRouter } from 'react-router-dom';
import { productPaid } from '../../modules/upload';

const ProductInfo = ({ match, history, location }) => {
    const dispatch = useDispatch()
    const { IMP } = window;
    const { product, user } = useSelector(({ landing, user }) => ({
        product: landing.productDetail,
        user: user.user
    }))
    useEffect(() => {
        const { id } = match.params
        dispatch(readProduct(id))
        return () => {
            dispatch(unloadProduct())
        }
    }, [dispatch])

    const makeDeal = ()=>{
        
    }

    const onClick = (form) => {
        if (!user) {
            alert('로그인을 해주세요!')
            history.push('/login')
        } else {
            IMP.init('imp97305641');
            IMP.request_pay({
                pg: 'kakao', // version 1.1.0부터 지원.
                pay_method: 'card',
                merchant_uid: 'merchant_' + new Date().getTime(),
                name: product.title,
                amount: product.price,
            }, function (rsp) {
                if (rsp.success) {
                    var msg = '결제가 완료되었습니다.';
                    msg += '고유ID : ' + rsp.imp_uid;
                    msg += '상점 거래ID : ' + rsp.merchant_uid;
                    msg += '결제 금액 : ' + rsp.paid_amount;
                    msg += '카드 승인번호 : ' + rsp.apply_num;
                    dispatch(productPaid({ user, product: product._id,form }))
                    location.reload()
                } else {
                    console.log(rsp)
                    var msg = '결제에 실패하였습니다.';
                    msg += '에러내용 : ' + rsp.error_msg;
                }
                alert(msg);
            });
        }
    }

    return (
        <>
            <ProductImage info={product} />
            <Product info={product} buy={onClick} />
        </>
    )
}

export default withRouter(ProductInfo)