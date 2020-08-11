import React from 'react';
import Template from '../components/auth/Template';
import DealRegisterForm from '../container/auth/DealRegisterForm';
import HeaderContainer from '../container/common/HeaderContainer';

const DealRegisterPage = () => {
  return (
    <div>
      <HeaderContainer />
      <Template>
      <DealRegisterForm />
      </Template>
    </div>
  );
};

export default DealRegisterPage;
