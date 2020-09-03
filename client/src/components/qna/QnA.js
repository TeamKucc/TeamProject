import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const QnA = ({ qna }) => {

  const qnas = Object.keys(qna).map(function (key) {
    return qna[key];
  });

  console.log(qnas)
  const convertDate = (InputDate) => {
    const date = new Date(InputDate);
    return (
      date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    );
  };

  if(!qna) return null;
  
  return (
    <Fragment>
      <div className="login-register-area pt-100 pb-100">
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
                    <div className="text-right pb-20">
                    <Link to={`/qna/question`}>
                      <button className="button-qna">
                      글작성
                      </button>
                      </Link>
                    </div>
                    <table className="table">
                      <thead className="thead">
                        <tr>
                          <td width="20%">작성자</td>
                          <td width="20%">문의유형</td>
                          <td>문의사항</td>
                          <td width="20%">작성일</td>
                          <td width="10%">답변여부</td>
                        </tr>
                      </thead>
                      <tbody>
                        {qnas.map((q, index) => {
                          return (
                            <tr key={index}>
                              <td>{q.userID}</td>
                              <td>{q.type}</td>
                              <td>
                                <Link to={`/qna/answer/${q._id}`}>
                                  {q.title}
                                </Link>
                              </td>
                              <td>{convertDate(q.created)}</td>
                              {q.answer ? <td>완료</td> : <td className="red">대기</td>}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QnA;
