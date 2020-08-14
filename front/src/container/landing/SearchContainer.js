import React, { useEffect } from 'react';
import Search from '../../components/landing/Search'
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../../modules/landing';

const SearchContainer = ({ match }) => {

	const dispatch = useDispatch()
	const { search } = useSelector( ({ landing }) => ({
		search: landing.search
	}))

	const { id } = match.params
	console.log(id)

	useEffect(() => {
		// window.location.reload()
		dispatch(
			searchProduct(id)
		)
	}, [dispatch])

	console.log(search)
	
	return (
		<div>
			<Search Products={search} id={id}/>
		</div>
	);
};

export default withRouter(SearchContainer);