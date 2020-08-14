import React, { useEffect } from 'react';
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
import UserHistory from '../pages/UserHistory'
import StockDetailPage from '../pages/StockDetailPage'
import DeliveryPage from '../pages/DeliveryPage'
import HeaderOne from '../pages/Test'
import Test2 from '../pages/Test2';
import LoginRegister from '../pages/RG';
import ProductTT from './product/ProductTT'
import ProductTes from '../container/post/ProductTes';
import SellerPage from '../pages/SellerPage';
import OrderPage from '../pages/OrderPage'
import RegisterCompletePage from '../pages/RegisterCompletePage'
import SearchPage from '../pages/SearchPage'

const App = () => {
  useEffect(() => {
  }, [])
  return (
    <>
      {/* <Route component={LandingPage} exact path={['/home', '/']} /> */}
      <Route component={LoginPage} exact path="/login" />
      <Route component={MainPage} exact path={['/home', '/']} />
      <Route component={LandingPage} path="/product/landing/:id" exact />
      <Route component={LoginPage} exact path="/login" />
      <Route component={RegisterPage} exact path="/register" />
      <Route component={BuyerRegisterPage} exact path="/register/buyer" />
      <Route component={DealRegisterPage} exact path="/register/deal" />
      <Route component={UserInfo} exact path="/userInfo/:user" />
      <Route component={HEAD} path="/head" />
      <Route component={Loading} path="loading" />
      <Route component={UploadProductPage} exact path="/product/upload" />
      <Route component={StockPage} exact path="/product/stock" />
      <Route component={SellerPage} exact path="/seller/paid/:id"/>
      <Route component={ProductPage} path="/item/:id" exact />
      <Route component={StockDetailPage} exact path="/product/upload/:id" />
      <Route component={UserHistory} exact path="/user/userhistory" />
      <Route component={Test2} path="/test/test" exact />
      <Route component={LoginRegister} path="/test/Rg" exact />
      {/* <Route component={ProductTes}  path="/:id" exact /> */}
      <Route component={OrderPage} path="/product/order/:id" exact />
      <Route component={RegisterCompletePage} path="/register/complete" exact />
      <Route component={SearchPage} path="/product/search/:id" exact />

      {/* 임시택배조회페이지 */}
      <Route component={DeliveryPage} exact path="/product/delivery" />
    </>
  );
};

export default App;
