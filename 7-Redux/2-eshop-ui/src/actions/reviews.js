export function loadReviews(productId, limit) {
    //..
    let reviews = [
        {stars: 5, body: 'sample-review-1', author: 'who-1'},
        {stars: 2, body: 'sample-review-2', author: 'who-2'},
    ]

    return {type: 'LOAD_REVIEWS', reviews, productId}
}

export function addNewReview(productId, review) {
    //...
    return {type: 'ADD_NEW_REVIEW', review, productId}
}