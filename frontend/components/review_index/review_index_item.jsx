import React from "react";

class ReviewIndexItem extends React.Component{
  render(){
    const {review} = this.props;
    return(
      <div className="review-index-item">
        <h6>{review.reviewer}</h6>
        <h5>{review.title}</h5>
        <p>{review.body}</p>
        <p>stars: {review.stars}</p>
    </div>
    )
  };
};

export default ReviewIndexItem;