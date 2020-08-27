import React, { Fragment } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Dropzone from 'react-dropzone';

const Delivery = ({ onChange, onPublish, delivery, deliveryNumber, error }) => {
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
                        <h4>택배등록</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="product">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <label>송장번호</label>
                            <input
                              onChange={onChange}
                              name="deliveryNumber"
                              value={deliveryNumber}
                            />
                            <br />
                            <label>택배사</label>
                            <select
                              name="delivery"
                              value={delivery}
                              onChange={onChange}
                              className="pb-20"
                            >
                              <option value="" hidden>
                                택배사를 선택해주세요
                              </option>
                              <option value={'kr.chunilps'}>천일택배</option>
                              <option value={'kr.cjlogistics'}>
                                CJ대한통운
                              </option>
                              <option value={'kr.cupost'}>CU 편의점택배</option>
                              <option value={'kr.cvsnet'}>
                                GS Postbox 택배
                              </option>
                              <option value={'kr.cway'}>Woori Express</option>
                              <option value={'kr.daesin'}>대신택배</option>
                              <option value={'kr.epost'}>우체국택배</option>
                              <option value={'kr.hanips'}>한의사랑택배</option>
                              <option value={'kr.hanjin'}>한진택배</option>
                              <option value={'kr.hdexp'}>합동택배</option>
                              <option value={'kr.homepick'}>홈픽</option>
                              <option value={'kr.honamlogis'}>
                                한서호남택배
                              </option>
                              <option value={'kr.ilyanglogis'}>
                                일양로지스
                              </option>
                              <option value={'kr.kdexp'}>경동택배</option>
                              <option value={'kr.kunyoung'}>건영택배</option>
                              <option value={'kr.logen'}>로젠택배</option>
                              <option value={'kr.lotte'}>롯데택배</option>
                              <option value={'kr.slx'}>SLX</option>
                              <option value={'kr.swgexp'}>
                                성원글로벌카고
                              </option>
                            </select>
                            <div className="button-box text-center pt-20 pb-20">
                              <button onClick={onPublish}>택배등록</button>
                            </div>
                            <div className="error">
                                {error == null ? '' : '* ' + error}
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

export default Delivery;
