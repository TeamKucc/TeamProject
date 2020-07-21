import React from 'react';
import { Route,Redirect, withRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import BuyerRegisterPage from '../pages/BuyerRegisterPage'
import MainPage from '../pages/MainPage'
import UserInfo from '../pages/UserInfo';
import HEAD from '../components/common/HEAD'


const App=()=>{
  return(
    <>
    <Route component={MainPage} path="/" />
    <Route component={LoginPage} path="/login"/>
    <Route component={BuyerRegisterPage} path="/register"/>
    <Route component={UserInfo} exact path="/userInfo/:user" />
    <Route component={HEAD} path="/head"/>
    </>
  )
}



export default withRouter(App);
