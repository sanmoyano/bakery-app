import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { categoriesReducer, productsReducer, cartReducer, orderReducer } from "./reducers";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
