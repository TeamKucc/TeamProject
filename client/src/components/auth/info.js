import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";



const Info = ({ onSubmit, form, user, onChange, error, Phistory }) => {

    console.log(Phistory)
    if (!Phistory) return null

    const onButton = () => {
        alert('배송정보가 등록되어 있지 않습니다')
    }

    return (
        <>
            <div className="myaccount-area pb-80 pt-100">
                <div className="container">
                    <div className="row">
                        <div className="ml-auto mr-auto col-lg-9">
                            <div className="myaccount-wrapper">
                                <Accordion defaultActiveKey="0">
                                    <Card className="single-my-account mb-20">
                                        <Card.Header className="panel-heading">
                                            <Accordion.Toggle variant="link" eventKey="0">
                                                <h3 className="panel-title">
                                                    <span>1 .</span> 내정보{" "}
                                                </h3>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <form onSubmit={onSubmit}>
                                                    <div className="myaccount-info-wrapper">
                                                        <div className="account-info-wrapper">
                                                            <h4>내정보 수정</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="billing-info">
                                                                    <label>아이디</label>
                                                                    <input type="text" id="standard-basic" name="userID" label="ID" value={form.userID} onChange={onChange} />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="billing-info">
                                                                    <label>이름</label>
                                                                    <input type="text" name="name" label="Name" value={form.name} onChange={onChange} />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="billing-info">
                                                                    <label>이메일</label>
                                                                    <input type="email" name="email" label="Email" value={form.email} onChange={onChange} />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="billing-info">
                                                                    <label>비밀번호</label>
                                                                    <input type="text" name="password" label="password" type="password"  onChange={onChange} />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="billing-info">
                                                                    <label>비밀번호 확인</label>
                                                                    <input type="text" name="passwordConfirm" label="password-confirm" type="password"  onChange={onChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="billing-back-btn text-center">
                                                            <div className="billing-btn">
                                                                <button type="submit">수정하기</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="info-error">{error}</div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="single-my-account mb-20">
                                        <Card.Header className="panel-heading">
                                            <Accordion.Toggle variant="link" eventKey="1">
                                                <h3 className="panel-title">
                                                    <span>2 .</span> 구매기록
                                                </h3>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <div className="myaccount-info-wrapper">
                                                    <div className="account-info-wrapper">
                                                        <h4>구매기록 상세</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12">
                                                            {Phistory.map((index) => {
                                                                return (
                                                                  <div
                                                                    className="billing-info"
                                                                    key={
                                                                      index._id
                                                                    }
                                                                  >
                                                                    <div className="billing-info">
                                                                      <label>
                                                                        상품명
                                                                      </label>
                                                                      <input
                                                                        type="text"
                                                                        value={
                                                                          index
                                                                            .productInfo
                                                                            .title
                                                                        }
                                                                        disabled
                                                                      />
                                                                    </div><div className="billing-info">
                                                                      <label>
                                                                        상품가
                                                                      </label>
                                                                      <input
                                                                        type="text"
                                                                        value={
                                                                          index
                                                                            .productInfo
                                                                            .discount
                                                                        }
                                                                        disabled
                                                                      />
                                                                    </div>
                                                                    <div className="billing-info">
                                                                      <div className="billing-back-btn">
                                                                        <div className="billing-btn">
                                                                          {index.deliveryNumber !==
                                                                          '' ? (
                                                                            <a
                                                                              href={
                                                                                'https://tracker.delivery/#/' +
                                                                                index.delivery +
                                                                                '/' +
                                                                                index.deliveryNumber
                                                                              }
                                                                              target="_blank"
                                                                            >
                                                                              <button>
                                                                                배송조회
                                                                              </button>
                                                                            </a>
                                                                          ) : (
                                                                              <button onClick={onButton}>
                                                                                배송조회
                                                                              </button>
                                                                          )}
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                );
                                                            })
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info