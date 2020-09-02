import React, { Fragment } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const StockDetail = ({ product, onEdit }) => {
  
  window.onbeforeunload = function (e) {
    return alert('정보 작성중');
  };

  if (!product) return null;

  return (
    <Fragment>
      <div className="login-register-area pt-50 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="product">
                  <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link>
                        <h4>STOCK DETAIL</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="product">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <h5> 상세 이미지</h5>
                          <div style={{ maxWidth: '700px', margin: 'auto' }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  width: '800px',
                                  height: '200px',
                                  overflowX: 'scroll',
                                }}
                              >
                                {product.images
                                  ? product.images.map((image, index) => (
                                      <div key={index}>
                                        <img
                                          style={{
                                            minWidth: '300px',
                                            width: '300px',
                                            height: '240px',
                                          }}
                                          alt={`productImg-${index}`}
                                          src={`${product.images[index].image.location}`}
                                        />
                                      </div>
                                    ))
                                  : ''}
                              </div>
                            </div>
                          </div>
                          <br />
                          <h5>썸네일 이미지</h5>
                          <div style={{ maxWidth: '700px', margin: 'auto' }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  width: '800px',
                                  height: '200px',
                                  overflowX: 'scroll',
                                }}
                              >
                                {product.thumbnails
                                  ? product.thumbnails.map((image, index) => (
                                      <div key={index}>
                                        <img
                                          style={{
                                            minWidth: '300px',
                                            width: '300px',
                                            height: '240px',
                                          }}
                                          alt={`productImg-${index}`}
                                          src={`${product.thumbnails[index].image.location}`}
                                        />
                                      </div>
                                    ))
                                  : ''}
                              </div>
                            </div>
                          </div>
                          <br />
                          <form>
                            <h5>제목</h5>
                            <input
                              type="text"
                              name="title"
                              value={product.title || ''}
                              readOnly
                            />

                            <h5>제품정보</h5>
                            <input
                              name="description"
                              value={product.description || ''}
                              readOnly
                            />

                            <h5>원가</h5>
                            <input
                              type="text"
                              name="price"
                              value={product.price || ''}
                              readOnly
                            />

                            <h5>할인가</h5>
                            <input
                              type="text"
                              name="discount"
                              value={product.discount || ''}
                              readOnly
                            />

                            <h5>딜인원</h5>
                            <input
                              type="text"
                              name="person"
                              value={product.person || ''}
                              readOnly
                            />

                            <h5>재고</h5>
                            <input
                              type="text"
                              name="stock"
                              value={product.stock || ''}
                              readOnly
                            />
                            <br />

                            <div className="button-box">
                              <button onClick={onEdit}>
                                <span>수정</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
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

export default StockDetail;
