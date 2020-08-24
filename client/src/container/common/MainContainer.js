import React, { useEffect } from 'react';
import Main from '../../components/common/Main'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { landingProduct, unloadProduct } from '../../modules/landing'

const MainContainer = () => {

	const dispatch = useDispatch()
	const { product } = useSelector(({ landing }) => ({
		product: landing.landing
	}))

	useEffect(() => {
		dispatch(landingProduct({}))
		return()=>{
			dispatch(unloadProduct())
		}
	}, [dispatch])

	return (
		<div>
			<Main products={product} />
		</div>
	);
};
export default withRouter(MainContainer);