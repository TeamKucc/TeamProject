import React, { useState, Fragment } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

// 상품코드, 상품명, 창고재고, 주문대기, 재고수정, 판매, 품절, 수정버튼
const Stock = ({ products, sellerHistory, onChange, onSubmit }) => {
  let Prod = Object.keys(products).map(function (key) {
    return products[key];
  });

  const [isModalOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  if (!products || !sellerHistory) return null;

  return (
    <Fragment>
      <div className="login-register-area pt-100 pb-100">
        <div>
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="management">
                  <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link eventKey="management">
                        <h4>재고관리</h4>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="payment">
                        <h4>판매관리</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="management">
                      {Prod[0] ? (
                        <table className="table">
                          <thead className="thead">
                            <tr>
                              <td>상품코드</td>
                              <td width="20px">썸네일</td>
                              <td width="20%">상품명</td>
                              <td width="10%">판매가</td>
                              <td width="10%">재고</td>
                              <td width="10%">판매</td>
                              <td width="10%">품절</td>
                              <td width="10%">상세</td>
                            </tr>
                          </thead>
                          <tbody>
                            {Prod.map((product, index) => {
                              return (
                                <tr key={index}>
                                  <td>{product._id}</td>
                                  <td>
                                    {product.thumbnails ? (
                                      <img
                                        style={{ maxHeight: '100px' }}
                                        alt={`productImg-${index}`}
                                        src={`${product.thumbnails[0].image.location}`}
                                      />
                                    ) : (
                                      ''
                                    )}
                                  </td>
                                  <td>{numberWithCommas(product.title)}</td>
                                  <td>{numberWithCommas(product.discount)}</td>
                                  <td className="red">
                                    {numberWithCommas(product.stock)}
                                  </td>
                                  {product.enable === null ? (
                                    <>
                                      <td>대기중</td>
                                      <td>대기중</td>
                                    </>
                                  ) : (
                                    <>
                                      {product.enable === true ? (
                                        <>
                                          <td>o</td>
                                          <td>x</td>
                                        </>
                                      ) : (
                                        <>
                                          <td>x</td>
                                          <td>o</td>
                                        </>
                                      )}
                                    </>
                                  )}
                                  <td>
                                    <Link to={`/product/upload/${product._id}`}>
                                      상세
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      ) : (
                        <div className="text-center pt-20">
                          <h4>'등록된 제품이 없습니다'</h4>
                        </div>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="payment">
                      {sellerHistory[0] ? (
                        <table className="table">
                          <thead className="thead">
                            <tr>
                              <td width="30%">결제코드</td>
                              <td width="30%">상품코드</td>
                              <td width="30%">운송장번호</td>
                              <td width="10%">택배</td>
                            </tr>
                          </thead>
                          <tbody>
                            {sellerHistory.map((history, index) => {
                              return (
                                <tr key={index}>
                                  <td>{history._id}</td>
                                  <td>{history.product}</td>
                                  {history.deliveryNumber ? (
                                    <>
                                      <td>{history.deliveryNumber}</td>
                                      <td className="red">완료 </td>
                                    </>
                                  ) : (
                                    <>
                                      <td className="blue">
                                        배송정보를 등록해주세요
                                      </td>
                                      <td>
                                        <Link
                                          to={`/product/delivery/${history._id}`}
                                        >
                                          등록
                                        </Link>
                                      </td>
                                    </>
                                  )}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      ) : (
                        <div className="text-center pt-20">
                          <h4>'등록된 제품이 없습니다'</h4>
                        </div>
                      )}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Stock;
