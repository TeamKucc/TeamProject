import React, { Fragment } from 'react';

const Order = ({ product,info,onChange,onPay }) => {

	if( !product ) return null;

	const { title, discount } = product
  return (
    <Fragment>
      <div className="checkout-area pt-95 pb-100">
        <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>주문하기</h3>
                  <form>
                  <div className="row">
									<div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>수령인</label>
                        <input type="text"  name="person" onChange={onChange} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>배송지</label>
                        <input type="text" name="address" onChange={onChange} />
                      </div>
                    </div>
										<div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>연락처</label>
                        <input type="text" name="phone" onChange={onChange} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-select mb-20">
                        <label>배송시 요청사항</label>
                        {/* <select value={message}> */}
												<select name="request" onChange={onChange}>
                          <option>배송시 요청사항을 선택해 주세요</option>
                          <option>배송 전 연락바랍니다</option>
                          <option>부재시 경비실에 맡겨주세요</option>
                          <option>부재시 전화 주시거나 문자 남겨주세요</option>
                          <option>빠른 배송 부탁드립니다</option>
                          <option>직접입력</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="additional-info-wrap">
                    <div className="additional-info">
                      <textarea
                        placeholder="직접입력"
												name="message"
												// value={message}
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  </form>
                </div>
              </div>
              

              <div className="col-lg-5">
                <div className="your-order-area">
                  <h3>주문정보</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>주문상품정보</li>
                          <li>상품금액</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        <ul>
                              <li>
                                <span className="order-middle-left">
                                  {title} X 1
                                </span>{' '}
                                <span className="order-price">
                                  {discount}
                                </span>
                              </li>
                        </ul>
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">배송정보</li>
                          <li>무료배송</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">총 결제금액</li>
                          <li>
                            {discount}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method"></div>
                  </div>
                  <div className="place-order mt-25">
                    <button className="btn-hover" onClick={onPay} >결제하기</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Order;
