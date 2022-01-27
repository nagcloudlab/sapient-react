/*

    products=[]

 */

export function productsReducer(state = [], action) {

    let {type} = action;

    switch (type) {
        case 'LOAD_PRODUCTS': {
            let {products} = action;
            // immutable state-change logic with current state based on action
            return [...products]
        }
        case 'BUY':{
            //..
            return state;
        }
        default:
            return  state;
    }

}