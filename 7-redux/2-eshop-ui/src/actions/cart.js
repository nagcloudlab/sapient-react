export function buy(item, qty = 1) {
    //..
    return {type: 'BUY', item, qty}
}
export function removeCartItem(item) {
    //..
    return {type: 'REMOVE_CART_ITEM', item}
}