import React from 'react';
<<<<<<< HEAD
import StockDetailContainer from '../container/management/StockDetailContainer'
// import FileUploadContainer from '../container/upload/FileUploadContainer'
// import ThumbnailUploadContainer from '../container/upload/ThumbnailUploadContainer'
import HeaderContainer from "../container/common/HeaderContainer"

const ProductEditPage = () => {
	return (
		<div>
			{/* <FileUploadContainer/>
      <ThumbnailUploadContainer/> */}
			<HeaderContainer />
			<StockDetailContainer/>
		</div>
	);
=======
import StockDetailContainer from '../container/management/StockDetailContainer';
import HeaderContainer from '../container/common/HeaderContainer';

const ProductEditPage = () => {
  return (
    <div>
      <HeaderContainer />
      <StockDetailContainer />
    </div>
  );
>>>>>>> d77bda53db3ea71ac267af672b17152351fa0752
};

export default ProductEditPage;
