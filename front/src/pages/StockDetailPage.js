import React from 'react';
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
};

export default ProductEditPage;