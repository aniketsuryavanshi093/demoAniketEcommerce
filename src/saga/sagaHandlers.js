import { fetchProduct } from "./requestHandlers";
import { takeLatest, call, put } from "redux-saga/effects";
import { ADD_TO_CART, FETCH_CART, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS , GET_BY_PRODUCT_CAT, REMOVE_ITEM, SET_PRICE, SHOW_PROD } from "./action.types";
import { addtocart, ShowProduct } from "./actions";

// worker saga: makes the api call when watcher saga sees the action
export function* fetchProdSaga() {
    try {
      const response = yield call(fetchProduct);
      const product = response.data;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: FETCH_PRODUCTS_SUCCESS, product });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: FETCH_PRODUCTS_FAILURE, error });
    }
  }
export function* showProdSaga(action) {
  try {
    yield put (ShowProduct(action.payload))
  } catch (error) {
    console.log(error);
  }
}
export function* getByCat(category){
  try {
    yield put ({type : GET_BY_PRODUCT_CAT , category })
    
  } catch (error) {
    console.log(error)
  }
}
export function* setPrice(payload){
  try {
    yield put ({type : SET_PRICE , payload })
    
  } catch (error) {
    console.log(error)
  }
}
export function* addTocart(action){
  try {
    // console.log(payload);
    yield put (addtocart(action.payload))
    
  } catch (error) {
    console.log(error)
  }
}
export function* fetchcart(){
  try {
 
    yield put ({type : FETCH_CART})
    
  } catch (error) {
    console.log(error)
  }
}
