import React from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import BuyerRegisterPage from '../pages/BuyerRegisterPage';
import DealRegisterPage from '../pages/DealRegisterPage';
import RegisterPage from '../pages/RegisterPage';
import MainPage from '../pages/MainPage';
import UserInfo from '../pages/UserInfo';
import HEAD from '../components/common/HEAD';
import Loading from '../pages/Loading';
import LandingPage from '../pages/LandingPage';
import UploadProductPage from '../pages/UploadProductPage';
import StockPage from '../pages/StockPage'
import ProductPage from '../pages/ProductPage';

const App = () => {
  return (
    <>
      <Route component={LandingPage} path={'/'} exact />
      <Route component={ProductPage} path="/product/:id" exact />
      <Route component={LoginPage} path="/login" exact />
      <Route component={RegisterPage} path="/register" exact />
      <Route component={BuyerRegisterPage} path="/register/buyer" exact />
      <Route component={DealRegisterPage} path="/register/deal" exact />
      <Route component={UserInfo} exact path="/userInfo/:user" exact />
      <Route component={Loading} path="loading" />
      <Route component={UploadProductPage} exact path="/product/upload" exact />
      <Route component={StockPage} exact path="/product/stock" />
    </>
  );
};

export default App;
