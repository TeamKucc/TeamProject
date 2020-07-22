import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga'
import * as productAPI from '../lib/api/product'
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'upload/INITIALIZE';
const CHANGE_FIELD = 'upload/CHANGE_FIELD';
const [
  UPLOAD_PRODUCT,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
] = createRequestActionTypes('upload/UPLOAD_PRODUCT');
const SET_ORIGINAL_PRODUCT = 'upload/SET_ORIGINAL_PRODUCT';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const uploadProduct = createAction(UPLOAD_PRODUCT, ({ thumbnails, title, description, price, images, discount, person }) => ({
  thumbnails, title, description, price, images, discount, person
}));
export const setOriginalPost = createAction(SET_ORIGINAL_PRODUCT, product => product);


const uploadProductSaga = createRequestSaga(UPLOAD_PRODUCT, productAPI.uploadProduct);

export function* uploadSaga() {
  yield takeLatest(UPLOAD_PRODUCT, uploadProductSaga);
}

const initialState = {
product:{	
	thumbnails:[], 
	title:'', 
	description:'', 
	price:0, 
	images:[], 
	discount:0, 
	person:0
},
};

const file = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [UPLOAD_PRODUCT]: (state) => ({
      ...state,
      product: null,
      postError: null,
    }),
    [UPLOAD_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
    }),
    [UPLOAD_PRODUCT_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      productError,
    }),
    [SET_ORIGINAL_PRODUCT]: (state, { payload: product }) => ({
      ...state,
      thumbnails: product.thumbnails,
      title: product.title,
      description: product.description,
      price: product.price,
      images: product.images,
      discount: product.discount,
      person: product.person,
    }),
  },
  initialState
);

export default file;