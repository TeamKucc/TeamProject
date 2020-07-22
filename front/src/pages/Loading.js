import React from 'react';
import { Redirect } from 'react-router-dom';
import MainPage from './MainPage';

const Loading =()=>{
    return(
        <Redirect to={MainPage}/>
    )
}

export default Loading