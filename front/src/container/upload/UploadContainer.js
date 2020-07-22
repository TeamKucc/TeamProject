import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { uploadProduct,changeField } from '../../modules/upload'
import UploadProduct from '../../components/upload/UploadProduct2'

const UploadContainer = ({history}) => {

	const dispatch = useDispatch()
	const {product,productError} = useSelector(({ upload }) => ({
		product:upload.product,
		productError:upload.productError
	}));

	const onPublish = e => {
		e.preventDefault();
		const {
			thumbnails,
			title,
			description,
			price,
			images,
			discount,
			person,} = product
		dispatch(
      uploadProduct({
        thumbnails,
        title,
        description,
        price,
        images,
        discount,
        person,
      })
    );
	}
	const onChange = e => {
		console.log('call')
		const {value, name} = e.target
		dispatch(
      changeField({
        key: name,
        value,
      })
    );
	}

	const onCancle = () => {
		history.goBack()
	}

	useEffect(() => {
	console.log(product)
	}, [history, product, productError])

	return(
		<UploadProduct onPublish={onPublish} onCancle={onCancle} onChange={onChange} product={product} />
	)
}

export default withRouter(UploadContainer)