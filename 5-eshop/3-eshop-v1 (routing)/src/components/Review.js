import React from 'react';


function renderStars(n) {
    const stars = []
    for (let i = 0; i < n; i++) {
        stars.push(<i key={i} style={{color: 'red', fontSize: '20px'}} className={"fa fa-star"}></i>)
    }
    return stars
}


function Review({value: review}) {
    return (
        <div className={"alert alert-danger"}>
            <span> {renderStars(review.stars)}&mdash; </span> <span>{review.author}</span>
            <hr/>
            <div>{review.body}</div>
        </div>
    );
}

export default Review;