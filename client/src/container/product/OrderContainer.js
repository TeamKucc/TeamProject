import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Order from '../../components/product/Order';
import { readProduct, unloadProduct } from '../../modules/landing';
import {
  productPaid,
  changeField,
  paymentChangeField,
} from '../../modules/upload';

const OrderContainer = ({ match, history }) => {
  const { IMP } = window;
  const dispatch = useDispatch();
  const { product, user, detai, payInfo } = useSelector(
    ({ landing, user, upload }) => ({
      product: landing.productDetail,
      user: user.user,
      detail: upload.info,
      payInfo: upload.payInfo,
    }),
  );

  useEffect(() => {
    const { id } = match.params;
    dispatch(readProduct(id));
    return () => {
      dispatch(unloadProduct());
    };
  }, [dispatch]);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const onPayChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      paymentChangeField({
        form: 'payInfo',
        key: name,
        value,
      }),
    );
  };

  const onPay = () => {
    if (!user) {
      alert('로그인을 해주세요!');
      history.push('/login');
    } else {
      IMP.init('imp97305641');
      IMP.request_pay(
        {
          pg: 'kakao', // version 1.1.0부터 지원.
          pay_method: 'card',
          merchant_uid: 'merchant_' + new Date().getTime(),
          name: product.title,
          amount: product.discount,
        },
        function (rsp) {
          if (rsp.success) {
            var msg = '결제가 완료되었습니다.';
            msg += '고유ID : ' + rsp.imp_uid;
            msg += '상점 거래ID : ' + rsp.merchant_uid;
            msg += '결제 금액 : ' + rsp.paid_amount;
            msg += '카드 승인번호 : ' + rsp.apply_num;
            dispatch(
              productPaid({
                user,
                product: product._id,
                seller: product.seller,
                productInfo: product,
                payInfo: payInfo,
              }),
            );
            history.push('/');
          } else {
            var msg = '결제에 실패하였습니다.';
            msg += '에러내용 : ' + rsp.error_msg;
          }
          alert(msg);
        },
      );
    }
  };
  return (
    <div>
      <Order product={product} onPay={onPay} onPayChange={onPayChange} />
    </div>
  );
};
export default withRouter(OrderContainer);
