import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { landingProduct, unloadProduct } from '../../modules/landing';
import { deleteProduct } from '../../modules/admin';
import Product from '../../components/admin/Admin-product';

const AdminProductContainer = () => {
  const dispatch = useDispatch();
  const { product,result } = useSelector(({ landing,admin }) => ({
    product: landing.landing,
    result:admin.product
  }));

  useEffect(() => {
    dispatch(landingProduct({}));
    return () => {
      dispatch(unloadProduct());
    };
  }, [dispatch]);

  useEffect(()=>{
      if(result){
          window.location.reload()
      }
  },[dispatch,result])

  const productDelete=(id)=>{
    console.log(id)
    dispatch(deleteProduct(id))
  }

  
  return(
      <Product product={product} productDelete={productDelete}/>
  )
};
export default withRouter(AdminProductContainer);
