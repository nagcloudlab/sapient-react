/*

    {

    1:[

    ],

    2:[

    ]

    }

 */


export function reviewsReducer(state = {}, action) {
    let {type} = action;
    switch (type) {
        case 'LOAD_REVIEWS': {
            let {reviews, productId} = action;
            let existingReviews = state[productId];
            let r;
            if (existingReviews) {
                r = [...existingReviews, ...reviews]
            } else {
                r = [...reviews]
            }
            return {...state, [productId]: r}
        }
        case 'ADD_NEW_REVIEW': {
            let {review, productId} = action;
            let existingReviews = state[productId];
            let r;
            if (existingReviews) {
                r = [...existingReviews, review]
            } else {
                r = [review]
            }
            return {...state, [productId]: r}
        }
        default:
            return state
    }
}