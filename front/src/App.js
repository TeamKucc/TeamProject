import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProductPage from './pages/ProductPage';
import CommunityPage from './pages/CommunityPage';
import DealRegisterPage from './pages/DealRegisterPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NoticePage from './pages/NoticePage';
import BuyerRegisterPage from './pages/BuyerRegisterPage';
import SellerRegisterPage from './pages/SellerRegitserPage';

const App = () => {
  return (
    <>
      {/* 수정 예정 */}
      <Header />
      
      <Route component={ProductPage} path="/products" />
      <Route component={CommunityPage} path="/community" />
      <Route component={DealRegisterPage} path="/registerproduct" />
      <Route component={LoginPage} path="/login" />
      <Route component={MainPage} path="/" exact/>
      <Route component={NoticePage} path="/notice" />
      <Route component={BuyerRegisterPage} path="/register/buyer" />
      <Route component={SellerRegisterPage} path="/register/seller" />

      {/* 수정예정  */}
      <Footer />
    </>
  )
}

export default App;
