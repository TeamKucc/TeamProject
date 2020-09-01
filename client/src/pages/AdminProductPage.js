import React from 'react';
import Admin from '../components/admin/Admin';
import AdminProductContainer from '../container/admin/AdminProductContainer';
const AdminProductPage = () => {
  return (
    <>
      <Admin>
        <AdminProductContainer />
      </Admin>
    </>
  );
};
export default AdminProductPage;
