import {createStore} from "redux";
import rootReducer from "../reducers";


const preloadedState = {
    products: [],
    reviews: {},
    cart: {}
}

const store = createStore(rootReducer, preloadedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store