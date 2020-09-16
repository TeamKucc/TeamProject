import React, { Fragment } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const Question = ({ onChange, onSubmit, error }) => {
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
                        <h4>Q&A</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="product">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form onSubmit={onSubmit}>
                            <select name="type" onChange={onChange}>
                              <option value="" hidden>
                                문의유형
                              </option>
                              <option value={'주문상품문의'}>주문상품문의</option>
                              <option value={'배송관련문의'}>배송관련문의</option>
                              <option value={'서비스칭찬'}>서비스칭찬</option>
                              <option value={'서비스 불편/제안'}>서비스 불편/제안</option>
                            </select>

                            <input
                            className="mt-40"
                              type="text"
                              name="title"
                              placeholder="제목"
                            //   value={qna.title}
                              onChange={onChange}
                            />
                            <textarea
                              name="question"
                              placeholder="문의사항"
                              onChange={onChange}
                            />
                            <br />
                            <div className="button-box pt-30 text-center">
                              <button type="submit">
                                <span>등록</span>
                              </button>
                              <br />
                              <br />
                              <div className="error">
                                {error == '' ? '' : '* ' + error}
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
};

export default Question;
