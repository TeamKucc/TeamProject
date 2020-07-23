import React from 'react'
import FileUpload from '../../components/upload/FileUpload'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { imageUpload } from '../../modules/upload'

const FileUploadContainer = ({history}) => {
	const dispatch = useDispatch()
	const { images } = useSelector(
		({upload}) => ({
			images: upload.images
		})
	)

	console.log(images)
	const onDrop = () => {
		dispatch(
			imageUpload({
				images,
			})
		)
	}

	return(
		<FileUpload onDrop={onDrop} images={images}/>
	)
}

export default  withRouter(FileUploadContainer)