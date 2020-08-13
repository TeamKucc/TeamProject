import React from 'react';
import RegisterComplete from '../components/auth/RegisterComplete'
import HeaderContainer from "../container/common/HeaderContainer"

const RegisterCompletePage = () => {
    return (
        <div>
            <HeaderContainer />
            <RegisterComplete />
        </div>
    );
};

export default RegisterCompletePage;