import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga'
import * as productAPI from '../lib/api/product'
import { takeLatest, call } from 'redux-saga/effects';

const INITIALIZE = 'product/INITIALIZE';
const CHANGE_FIELD = 'product/CHANGE_FIELD';

const [
  IMAGE_UPLOAD,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE,
] = createRequestActionTypes('product/IMAGE_UPLOAD');

const [
  PRODUCT_UPLOAD,
  PRODUCT_UPLOAD_SUCCESS,
  PRODUCT_UPLOAD_FAILURE,
] = createRequestActionTypes('product/PRODUCT_UPLOAD');
const SET_ORIGINAL_UPLOAD = 'product/SET_ORIGINAL_UPLOAD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const imageUpload = createAction(IMAGE_UPLOAD, ({ images, option }) => ({
  images, option
}));

export const productUpload = createAction(PRODUCT_UPLOAD, ({ thumbnails, title, description, price, images, discount, person }) => ({
  thumbnails, title, description, price, images, discount, person
}));

export const setOriginalUpload = createAction(SET_ORIGINAL_UPLOAD, upload => upload);

const imageUploadSaga = createRequestSaga(IMAGE_UPLOAD, productAPI.imageUpload);
const productUploadSaga = createRequestSaga(PRODUCT_UPLOAD, productAPI.productUpload);

export function* productSaga() {
  yield takeLatest(IMAGE_UPLOAD, imageUploadSaga);
  yield takeLatest(PRODUCT_UPLOAD, productUploadSaga);
}

// export function*  imageSaga(files){
//   const formData = new FormData()
//   formData.append('file', files)
//   try{
//     const options = {
//       method: 'POST',
//       header: { 'content-type': 'multipart/form-data' },
//       body : formData
//     }
//     const response = yield call(PRODUCT_UPLOAD, imageUploadSaga, options)
//     console.log(response)
//   } catch (err) {
//     console.log(err)
//   }
// }

export const initialState = {
	thumbnails:[],
	title:'', 
	description:'', 
	price:0, 
	images:[], 
	discount:0, 
  person:0,
  upload: null,
  uploadError: null,
};

const upload = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [IMAGE_UPLOAD]: (state) => ({
      ...state,
      product: null,
      postError: null,
    }),
    [IMAGE_UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
      ...state,
      upload,
    }),
    [IMAGE_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [PRODUCT_UPLOAD]: (state) => ({
      ...state,
      upload: null,
      uploadError: null,
    }),
    [PRODUCT_UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
      ...state,
      upload,
    }),
    [PRODUCT_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [SET_ORIGINAL_UPLOAD]: (state, { payload: upload }) => ({
      ...state,
      thumbnails: upload.thumbnails,
      title: upload.title,
      description: upload.description,
      price: upload.price,
      images: upload.images,
      discount: upload.discount,
      person: upload.person,
    }),
  },
  initialState
);

export default upload;