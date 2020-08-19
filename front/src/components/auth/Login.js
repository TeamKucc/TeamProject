import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";


const LoginRegister = ({ form, onChange, onSubmit }) => {

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
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={onSubmit}>
                              <input
                                type="text"
                                name="userID"
                                placeholder="Username"
                                value={form.username}
                                onChange={onChange}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={onChange}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <Link to={process.env.PUBLIC_URL + '/'}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={onSubmit} className="text-center">
                              <div className="button-box">
                                <Link to="/register/buyer">
                                  <button className="mr-50" type="submit">
                                    <span>BUYER</span>
                                  </button>
                                </Link>
                                <Link to="/register/deal">
                                  <button type="submit">
                                    <span>SELLER</span>
                                  </button>
                                </Link>
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

LoginRegister.propTypes = {
    location: PropTypes.object
};

export default LoginRegister;
