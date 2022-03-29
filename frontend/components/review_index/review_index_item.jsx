import React from "react";

class ReviewIndexItem extends React.Component{
  render(){
    const {review} = this.props;
    return(
      <div className="review-index-item">
        <div>
          <span>stars: {review.stars}</span> <span>&nbsp;</span>
          <span className="date">{review.date}</span>
        </div>
        <div className="name-container">
          <span className="verified-tag"></span>
          <span className="reviewer-name">  {review.reviewer}</span>
        </div>
        <h5 className="reviewer-title">{review.title}</h5>
        <p>{review.body}</p>
    </div>
    )
  };
};

export default ReviewIndexItem;