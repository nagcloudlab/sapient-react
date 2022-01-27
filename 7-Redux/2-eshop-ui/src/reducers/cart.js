/*

    cart= {
        id:{item,qty}
    }

 */


export function cartReducer(state = {}, action) {
    let {type} = action;
    switch (type) {
        case 'BUY': {
            let {item, qty} = action;
            let {id} = item;
            let cartLine = state[id];
            if (cartLine) {
                cartLine = {item, qty: cartLine.qty + qty}
            } else {
                cartLine = {item, qty: 1}
            }
            return {...state, [id]: cartLine}
        }
        case 'REMOVE_CART_ITEM': {
            let {item} = action;
            let {id} = item;
            delete state[id];
            return {...state}
        }
        default:
            return state;
    }
}