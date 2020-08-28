import React, { useEffect } from 'react';
import Search from '../../components/landing/Search';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../../modules/landing';

const SearchContainer = ({ match }) => {

  const dispatch = useDispatch();
  const { search } = useSelector(({ landing }) => ({
    search: landing.search,
  }));
  const { id } = match.params;

  useEffect(() => {
    dispatch(searchProduct(id));
  }, [dispatch]);

  return (
    <div>
      <Search Products={search} id={id} />
    </div>
  );
};

export default withRouter(SearchContainer);
