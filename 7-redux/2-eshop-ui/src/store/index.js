import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const preloadedState = {
    products: [],
    reviews: {},
    cart: {}
}

const store = createStore(rootReducer, preloadedState, composedEnhancer)

export default store