import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Order from '../../components/product/Order'
import { readProduct, unloadProduct } from '../../modules/landing';


const OrderContainer = ({ match }) => {

	const dispatch = useDispatch();
	const { product } = useSelector(({ landing }) => ({
		product: landing.productDetail,
	}))

	useEffect(() => {
		const { id } = match.params
		dispatch(readProduct(id))
		return () => {
			dispatch(unloadProduct())
		}
	}, [dispatch])

	console.log(product)
	return (
		<div>
			<Order product={product} />
		</div>
	);
};
export default withRouter(OrderContainer);