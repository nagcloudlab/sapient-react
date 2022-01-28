import {createStore, combineReducers, applyMiddleware} from 'redux'
import {todosReducer} from "../reducers/todos";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    todos: todosReducer
})

const preloadedState = {
    todos: []
}

const store = createStore(rootReducer, preloadedState,composedEnhancer)

export default store;