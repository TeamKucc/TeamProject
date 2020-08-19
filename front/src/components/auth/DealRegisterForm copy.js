import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ErrorMsg = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const SuccessMsg = styled.div`
  color: blue;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const RegisterForm = ({
  form,
  onChange,
  onSubmit,
  success,
  fail,
  error,
  onClick,
}) => {
  const classes = useStyles();

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
                      <Nav.Link>
                        <h4>BUYER</h4>
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
                              placeholder="ID"
                              value={form.userID}
                              onChange={onChange}
                            />
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={form.name}
                              onChange={onChange}
                            />
                            <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={form.password}
                              onChange={onChange}
                            />
                            <input
                              type="password"
                              name="passwordConfirm"
                              placeholder="Password Confirm"
                              value={form.passwordConfirm}
                              onChange={onChange}
                            />
                            <input
                              type="email"
                              name="email"
                              placeholder="E-mail"
                              value={form.email}
                              onChange={onChange}
                            />
                            <div className="button-box">
                              <button type="submit">
                                <span>Register</span>
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
    // <div>
    //   <form
    //     className={classes.root}
    //     noValidate
    //     autoComplete="off"
    //     onSubmit={onSubmit}
    //   >
    //     <TextField
    //       id="standard-basic"
    //       name="userID"
    //       label="ID"
    //       value={form.userID}
    //       onChange={onChange}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       name="name"
    //       label="Name"
    //       value={form.name}
    //       onChange={onChange}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       name="password"
    //       label="password"
    //       type="password"
    //       value={form.password}
    //       onChange={onChange}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       name="passwordConfirm"
    //       label="password-confirm"
    //       type="password"
    //       value={form.passwordConfirm}
    //       onChange={onChange}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       name="email"
    //       label="Email"
    //       value={form.email}
    //       onChange={onChange}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       name="business"
    //       label="Business"
    //       value={form.business}
    //       onChange={onChange}
    //     />
    //     <SuccessMsg>{success}</SuccessMsg>
    //     <ErrorMsg>{fail}</ErrorMsg>
    //     <Button onClick={onClick}>사업자번호조회</Button>
    //     <ErrorMsg>{error}</ErrorMsg>
    //     <button type="submit">완료</button>
    //   </form>
    // </div>
  );
};

export default RegisterForm;
