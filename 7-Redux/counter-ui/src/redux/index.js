
import { createStore, combineReducers } from 'redux'

/*

//state

    {
        counter:{
            count:0
        }
    }

//action(s)

    {type:INCREMENT,value:1}
    {type:DECREMENT,value:1}

*/

//-----------------------------------------------------------
// reducer(s)
//-----------------------------------------------------------

function counterReducer(state = { count: 0 }, action) {
    console.log("counterReducer()");
    let { type } = action;
    switch (type) {
        case 'INCREMENT': {
            let { value } = action;
            return { count: state.count + value }
        }
        case 'DECREMENT': {
            let { value } = action;
            return { count: state.count - value }
        }
        case 'RESET': {
            return { count: 0 }
        }
        default:
            return state
    }

}

const rootReducer = combineReducers({
    counter: counterReducer,

})


//-----------------------------------------------------------
// store
//-----------------------------------------------------------

const intialState = {
    counter: {
        count: 100
    }
}

const store = createStore(rootReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;