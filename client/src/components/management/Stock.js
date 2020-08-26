import React, { useState, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeliveryContainer from '../../container/management/DeliveryContainer';

// 상품코드, 상품명, 창고재고, 주문대기, 재고수정, 판매, 품절, 수정버튼
const Stock = ({ Products, Sellhistory, onChange }) => {

  let Prod = Object.keys(Products).map(function (key) {
    return Products[key];
  });
  const [isModalOpen,setOpen]=useState(false)

  const openModal=()=>{
    setOpen(true)
  }
  const closeModal=()=>{
    setOpen(false)
  }
  if (!Products || !Sellhistory) return null
  console.log(Sellhistory)
  return (
    <Fragment>
      {/* breadcrumb */}
      <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="login">
                  <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link eventKey="login">
                        <h4>재고관리</h4>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">
                        <h4>판매관리</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <div className="stock-form-container">
                        <Paper>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>상품코드</TableCell>
                                <TableCell>상품명</TableCell>
                                <TableCell></TableCell>
                                <TableCell>원가</TableCell>
                                <TableCell>판매가</TableCell>
                                <TableCell>판매</TableCell>
                                <TableCell>품절</TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {Prod.map((product, index) => {
                                return (
                                  <TableRow key={index}>
                                    <TableCell width="15%">{product._id}</TableCell>
                                    <TableCell width="20px">
                                      {product.thumbnails ? (
                                        <img
                                          style={{ maxHeight: '100px' }}
                                          alt={`productImg-${index}`}
                                          src={`${product.thumbnails[0].image.location}`}
                                        />
                                      ) : (
                                          ''
                                        )}
                                    </TableCell>
                                    <TableCell width="20%">{product.title}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.discount}</TableCell>
                                    {product.enable === null ? (
                                      <>
                                        <TableCell>대기중</TableCell>
                                        <TableCell>대기중</TableCell>
                                      </>
                                    ) : (
                                        <>
                                          <TableCell>
                                            <Checkbox
                                              checked={product.enable === true}
                                              value={true}
                                              name={product._id}
                                              aria-label="판매"
                                            />
                                          </TableCell>
                                          <TableCell>
                                            <Checkbox
                                              checked={product.enable === false}
                                              value={false}
                                              name={product._id}
                                              aria-label="품절"
                                            />
                                          </TableCell>
                                        </>
                                      )}
                                    <TableCell width="5%">
                                      <Link to={`/product/upload/${product._id}`}>상세</Link>
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </Paper>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <div className="stock-form-container">
                        <div className="login-register-form">
                          <div className="myaccount-info-wrapper">
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                {Sellhistory.map((index) => {
                                  return (
                                    <div className="billing-info" key={index._id}>
                                      <div className="billing-info">
                                        <label>
                                          배송ID
                                        </label>
                                        <input
                                          type="text"
                                          value={
                                            index
                                              ._id
                                          }
                                          disabled
                                        />
                                      </div><div className="billing-info">
                                        <label>
                                          배송번호
                                        </label>
                                        {index.deliveryNumber ? (
                                          <>
                                          <input
                                            type="text"
                                            name="history"
                                            index={index}
                                            value={index.deliveryNumber}
                                            onChange={onChange}
                                            disabled
                                          />
                                          </>
                                        ) : (
                                          <>
                                          </>
                                        )
                                        }
                                      </div>
                                      {isModalOpen?(
                                        <DeliveryContainer id={index._id} close={closeModal}/>
                                      ):(
                                        <>
                                        </>
                                      )
                                        }
                                      <div className="billing-info">
                                        <div className="billing-back-btn">
                                          <div className="billing-btn">
                                            <button onClick={()=>openModal(index._id)}>
                                              송장번호 입력
                                              </button>
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

export default Stock;
