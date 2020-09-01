import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const QnA = () => {
    
    return (
        <Fragment>
      <div className="login-register-area pt-100 pb-100">
        <div>
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="qna">
                  <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link>
                        <h4>QnA</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="qna">
                        <table className="table">
                          <thead className="thead">
                            <tr>
                              <td width="20%">작성자</td>
                              <td width="20%">문의유형</td>
                              <td>문의사항</td>
                              <td width="20%">작성일</td>
                            </tr>
                          </thead>
                          <tbody>
                              <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              </tr>
                          </tbody>
                        </table>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    )
}

export default QnA;