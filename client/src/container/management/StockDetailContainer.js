import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { stockDetail } from '../../modules/management';
import { setOriginalUpload } from '../../modules/upload'
import StockDetail from '../../components/management/StockDetail';
// import { stockDetail } from '../../lib/api/product';

const StockDetailContainer = ({ match, history }) => {
  const { id } = match.params;
  console.log(id)
  const dispatch = useDispatch();
  const { management } = useSelector(({ management }) => ({
    management: management.management,
  }));

  useEffect(() => {
    dispatch(stockDetail(id));
  }, [dispatch]);

  console.log(management)
  const onEdit = () => {
    dispatch(setOriginalUpload(management));
    history.push('/product/upload')
  };

  return (
    <div>
      <StockDetail product={management} onEdit={onEdit} />
    </div>
  );
};

export default withRouter(StockDetailContainer);

// import React, { useEffect } from 'react';
// import ProductEdit from '../../components/upload/ProductEdit';
// import { useDispatch, useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { changeField } from '../../modules/landing';
// import { readProduct, unloadProduct } from '../../modules/landing';
// import { updateUpload } from '../../modules/landing';
// import { initialize } from '../../modules/landing';

// const ProductEditContainer = ({ match, history }) => {
//   const dispatch = useDispatch();

//   const {
//     stock,
//     thumbnails,
//     title,
//     description,
//     price,
//     images,
//     discount,
//     person,
//     enable,
//     product,
//   } = useSelector(({ upload, landing }) => ({
//     stock: upload.stock,
//     thumbnails: upload.thumbnails,
//     title: upload.title,
//     description: upload.description,
//     price: upload.price,
//     images: upload.images,
//     discount: upload.discount,
//     person: upload.person,
//     enable: upload.enable,
//     product: landing.productInfo
//   }));

//   const { id } = match.params;
//   console.log(product.price)

//   useEffect( () => {
//     dispatch(readProduct(id))
//     dispatch(changeField({
//       form:'productInfo',
//       key: price,
//     }))
//     return () => {
//       // dispatch(unloadProduct());
//     };
//   }, [dispatch]);

//   console.log();
//   const onPublish = async (e) => {
//     e.preventDefault();
//     await dispatch(
//       updateUpload({
//         id,
//         stock,
//         thumbnails,
//         title,
//         description,
//         price,
//         images,
//         discount,
//         person,
//         enable,
//       }),
//     )
//     // await dispatch(initialize())
//     history.push('/product/stock');
//   };

//   const onChange = (e) => {
//     console.log('call');
//     const { value, name } = e.target;
//     dispatch(
//       changeField({
//         form:'productInfo',
//         key: name,
//         value,
//       }),
//     );
//   };

//   return (
//     <div>
//       <ProductEdit
//         onPublish={onPublish}
//         onChange={onChange}
//         product={product}
//       />
//     </div>
//   );
// };

// export default withRouter(ProductEditContainer);
