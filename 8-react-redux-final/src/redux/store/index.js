import {createStore, combineReducers, applyMiddleware} from 'redux'
import {todosReducer} from "../reducers/todos";
import {composeWithDevTools} from 'redux-devtools-extension';


const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsDenylist, actionsCreators and other options if needed
});

const rootReducer = combineReducers({
    todos: todosReducer
})

const preloadedState = {
    todos: []
}

const store = createStore(rootReducer, preloadedState, composeEnhancers(
    // other store enhancers if any
))

export default store;