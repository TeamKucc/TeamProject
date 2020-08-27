import React, { Fragment } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Dropzone from 'react-dropzone';


const StockDetail = ({ product, onEdit }) => {
  
  window.onbeforeunload = function (e) {
    return alert('정보 작성중');
  }

  if(!product) return null

  return (
    <Fragment>
      {/* breadcrumb */}
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
                          <h5> Detail Image</h5>
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
                          <h5>Thumbnail Image</h5>
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
                            <h5>Title</h5>
                            <input
                              type="text"
                              name="title"
                              value={product.title}
                            />

                            <h5>Description</h5>
                            <input
                              name="description"
                              value={product.description}
                            />

                            <h5>Price</h5>
                            <input
                              type="text"
                              name="price"
                              value={product.price}
                            />

                            <h5>Discount Price</h5>
                            <input
                              type="text"
                              name="discount"
                              value={product.discount}
                            />

                            <h5>Person</h5>
                            <input
                              type="text"
                              name="person"
                              value={product.person}
                            />

                            <h5>Stock</h5>
                            <input
                              type="text"
                              name="stock"
                              value={product.stock}
                            />
                            <br />

                            <div className="button-box">
                              <button onClick={onEdit}>
                                <span>EDIT</span>
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
