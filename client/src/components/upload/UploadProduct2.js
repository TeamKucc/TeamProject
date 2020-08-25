import React, { Fragment} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Dropzone from 'react-dropzone';


function UploadProduct({ onPublish, onChange, product, imageDrop, imageDelete, images, thumbnailDrop, thumbnailDelete, thumbnails, error }) {

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
                        <h4>PRODUCT REGISTER</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="product">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <div style={{ maxWidth: '700px', margin: 'auto' }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Dropzone
                                onDrop={imageDrop}
                                multiple={false}
                                maxSize={800000000}
                              >
                                {({ getRootProps, getInputProps }) => (
                                  <div
                                    style={{
                                      width: '200px',
                                      height: '200px',
                                      border: '1px solid lightgray',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      textAlign: 'center',
                                    }}
                                    {...getRootProps()}
                                  >
                                    <input {...getInputProps()} />
                                    DETAIL IMAGE
                                    {/* <br/><br/>"click here and upload image" */}
                                  </div>
                                )}
                              </Dropzone>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '300px',
                                  height: '200px',
                                  overflowX: 'scroll',
                                }}
                              >
                                {images.map((image, index) => (
                                  <div
                                    key={index}
                                    onClick={() => imageDelete(image)}
                                  >
                                    <img
                                      style={{
                                        minWidth: '300px',
                                        width: '300px',
                                        height: '240px',
                                      }}
                                      alt={`productImg-${index}`}
                                      src={`${images[index].image.location}`}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div
                            style={{ maxWidth: '700px', margin: '2rem auto' }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Dropzone
                                onDrop={thumbnailDrop}
                                multiple={false}
                                maxSize={800000000}
                              >
                                {({ getRootProps, getInputProps }) => (
                                  <div
                                    style={{
                                      width: '200px',
                                      height: '200px',
                                      border: '1px solid lightgray',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      textAlign: 'center',
                                    }}
                                    {...getRootProps()}
                                  >
                                    <input {...getInputProps()} />
                                    THUMBNALE IMAGE
                                    <br/>700 x 700
                                  </div>
                                )}
                              </Dropzone>

                              <div
                                style={{
                                  display: 'flex',
                                  width: '300px',
                                  height: '200px',
                                  overflowX: 'scroll',
                                }}
                              >
                                {thumbnails.map((image, index) => (
                                  <div
                                    key={index}
                                    onClick={() => thumbnailDelete(image)}
                                  >
                                    <img
                                      style={{
                                        minWidth: '300px',
                                        width: '300px',
                                        height: '240px',
                                      }}
                                      alt={`productImg-${index}`}
                                      src={`${thumbnails[index].image.location}`}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <form onSubmit={onPublish}>
                            <input
                              type="text"
                              name="title"
                              placeholder="Title"
                              value={product.title}
                              onChange={onChange}
                            />
                            <input
                              name="description"
                              placeholder="Description"
                              value={product.discription}
                              onChange={onChange}
                            />
                            <input
                              type="text"
                              name="price"
                              placeholder="Price"
                              value={product.price}
                              onChange={onChange}
                            />
                            <input
                              type="text"
                              name="discount"
                              placeholder="Discount Price"
                              value={product.discount}
                              onChange={onChange}
                            />
                            <input
                              type="text"
                              name="person"
                              placeholder="Person"
                              value={product.person}
                              onChange={onChange}
                            />
                            <input
                              type="text"
                              name="stock"
                              placeholder="Stock"
                              value={product.stock}
                              onChange={onChange}
                            />
                            <br />
                            <select name="category" onChange={onChange}>
                              <option value="" hidden>Category</option>
                              <option value={'패션의류'}>패션의류</option>
                              <option value={'패션잡화'}>패션잡화</option>
                              <option value={'뷰티'}>뷰티</option>
                              <option value={'식품'}>식품</option>
                              <option value={'출산/유아동'}>출산/유아동</option>
                              <option value={'디지털/가전'}>디지털/가전</option>
                              <option value={'인테리어'}>인테리어</option>
                              <option value={'스포츠/레저'}>스포츠/레저</option>
                              <option value={'생활'}>생활</option>
                            </select>
                            <div className="button-box pt-30 text-center">
                              <button type="submit">
                                <span>Register</span>
                              </button>
                              <br />
                              <br />
                              <div className="error">
                              {error == null ? '' : '* ' + error}
                              </div>
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
}

export default UploadProduct;
