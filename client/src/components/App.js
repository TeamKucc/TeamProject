import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import OrderPage from '../pages/OrderPage';
import StockPage from '../pages/StockPage';
import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';
import LandingPage from '../pages/LandingPage';
import DeliveryPage from '../pages/DeliveryPage';
import UserInfoPage from '../pages/UserInfoPage';
import RegisterPage from '../pages/RegisterPage';
import StockDetailPage from '../pages/StockDetailPage';
import BuyerRegisterPage from '../pages/BuyerRegisterPage';
import UploadProductPage from '../pages/UploadProductPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import SellerRegisterPage from '../pages/SellerRegisterPage';
import RegisterCompletePage from '../pages/RegisterCompletePage';
import DealAdmin from './admin/Admin';
import AdminProductPage from '../pages/AdminProductPage'
import AdminMemberPage from '../pages/AdminMemberPage'

const App = () => {
  return (
    <>
      <Route component={LoginPage} path="/login" exact />
      <Route component={MainPage} path={['/home', '/']}  exact />
      <Route component={RegisterPage} path="/register"  exact />
      <Route component={StockPage} path="/product/stock"  exact />
      <Route component={ProductDetailPage} path="/item/:id" exact />
      <Route component={OrderPage} path="/product/order/:id" exact />
      <Route component={UserInfoPage} path="/userInfo/:user"  exact />
      <Route component={SearchPage} path="/product/search/:id" exact />
      <Route component={LandingPage} path="/product/landing/:id" exact />
      <Route component={UploadProductPage} path="/product/upload"  exact />
      <Route component={BuyerRegisterPage} path="/register/buyer"  exact />
      <Route component={SellerRegisterPage} path="/register/deal"  exact />
      <Route component={DeliveryPage} path="/product/delivery/:id"  exact />
      <Route component={StockDetailPage} path="/product/upload/:id"  exact />
      <Route component={RegisterCompletePage} path="/register/complete" exact />
      <Route component={DealAdmin} path="/admin" exact/>
      <Route component={AdminMemberPage} path="/admin/member"/>
      <Route component={AdminProductPage} path="/admin/product"/>
    </>
  );
};

export default App;
