import React, { Fragment } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const Answer = ({ qna, onChange, onSubmit }) => {

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
                        <h4>Q&A DETAIL</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="product">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <h5>작성자</h5>
                            <input
                              type="text"
                              name="user"
                              value={qna.user || ""}
                              readOnly
                            />

                            <h5>문의유형</h5>
                            <input
                            type="text"
                              name="type"
                                value={qna.type || ""}
                              readOnly
                            />

                            <h5>제목</h5>
                            <input
                              type="text"
                              name="title"
                                value={qna.title || ""}
                              readOnly
                            />

                            <h5>문의사항</h5>
                            <input
                              type="text"
                              name="question"
                              value={qna.question || ""}
                              readOnly
                            />

                            {!qna.answer ? (
                              <div>
                                <h5 className="red">* 답변을 등록해주세요</h5>
                                <input
                                  type="text"
                                  name="answer"
                                  onChange={onChange}
                                />
                                <br />

                                <div className="button-box text-center">
                                  <button onClick={onSubmit}>
                                    <span>답변등록</span>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <>
                                <h5>답변</h5>
                                <input
                                  type="text"
                                  name="answer"
                                  value={qna.answer || ""}
                                  readOnly
                                />
                                <br />
                              </>
                            )}
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

export default Answer;
