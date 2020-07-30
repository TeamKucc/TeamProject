import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
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
import ProductEditPage from '../pages/ProductEditPage'

const App = () => {
  return (
    <>
      <Route component={LandingPage} path={['/home', '/']} exact/>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={BuyerRegisterPage} path="/register/buyer" />
      <Route component={DealRegisterPage} path="/register/deal" />
      <Route component={UserInfo} exact path="/userInfo/:user" />
      <Route component={HEAD} path="/head" />
      <Route component={Loading} path="loading" />
      <Route component={LandingPage} path="/product/landing" />
      <Route component={UploadProductPage} exact path="/product/upload" />
      <Route component={StockPage} exact path="/product/stock" />
      <Route component={ProductPage} path="/product/:id" exact/>
      <Route component={ProductEditPage} path="/product/upload/:id" exact/>
    </>
  );
};

export default withRouter(App);
