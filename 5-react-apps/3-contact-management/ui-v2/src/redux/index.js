import {createStore, combineReducers} from 'redux'


// imp-note : reducer function never do mutations on state

function contactsReducer(state = [], action) {
    let {type} = action;
    switch (type) {
        case 'ADD_NEW_CONTACT': {
            let {contact} = action
            contact.id = state.length + 1
            return [...state, contact]
        }
        case 'DELETE_CONTACT': {
            let {id} = action
            return state.filter(c => c.id !== id)
        }
        case 'EDIT_CONTACT': {
            let {contact} = action
            let result = state.map(co => {
                if (co.id === contact.id)
                    return {...contact}
                else
                    return co
            })
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    contacts: contactsReducer //
})

const initialState = {
    contacts: [
        {id: 1, name: 'Nag', email: 'nag@mail.com', mobile: '1234567890', address: 'chennai'},
        {id: 2, name: 'Indu', email: 'indu@mail.com', mobile: '0987654321', address: 'chennai'},
        {id: 3, name: 'Riya', email: 'nag@mail.com', mobile: '1234567890', address: 'chennai'},
        {id: 4, name: 'Diya', email: 'indu@mail.com', mobile: '0987654321', address: 'chennai'}
    ]
}

const store = createStore(rootReducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default  store;