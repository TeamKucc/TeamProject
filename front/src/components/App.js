import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import BuyerRegisterPage from '../pages/BuyerRegisterPage'
import MainPage from '../pages/MainPage'



const App=()=>{
  return(
    <>
    <Route component={MainPage} path="/" />
    <Route component={LoginPage} path="/login"/>
    <Route component={BuyerRegisterPage} path="/register"/>
    
    </>
  )
}



export default App;
