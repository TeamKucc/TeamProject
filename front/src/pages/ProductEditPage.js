import React from 'react';
import ProductEditContainer from '../container/upload/ProductEditContainer'
import FileUploadContainer from '../container/upload/FileUploadContainer'
import ThumbnailUploadContainer from '../container/upload/ThumbnailUploadContainer'
const ProductEditPage = () => {
	return (
		<div>
			<FileUploadContainer/>
      <ThumbnailUploadContainer/>
			<ProductEditContainer/>
		</div>
	);
};

export default ProductEditPage;