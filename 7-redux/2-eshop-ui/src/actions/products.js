

// action-creator
export function loadProducts(cat, limit) {

    // thunk
    return async (dispatch) => {
        let response = await fetch("http://localhost:8181/products")
        let products = await response.json()
        dispatch({
            type: 'LOAD_PRODUCTS',
            products
        })
    }


}