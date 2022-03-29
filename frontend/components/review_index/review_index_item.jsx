import React from "react";
import Stars from "./stars";

class ReviewIndexItem extends React.Component{
  render(){
    const {review} = this.props;
    return(
      <div className="review-index-item">
        <div className="profile-container">
          <div className="prof-pic">
            {review.reviewer[0]}
          </div>
          <div>
            <div>
              <Stars averageRating={review.stars}/> <span>&nbsp;</span>
              <span className="date">{review.date}</span>
            </div>
            <div className="name-container">
              <span className="verified-tag"></span>
              <span className="reviewer-name">  {review.reviewer}</span>
            </div>
          </div>
        </div>
        <div className="review-section">
          <div className="review-content">
            <h5 className="reviewer-title">{review.title}</h5>
            <p>{review.body}</p>
          </div>
          <div className="like-button-container">
            1<span>&nbsp;</span><i className="fa-solid fa-thumbs-up"></i>
            <span>&nbsp; &nbsp;</span>
            2<span>&nbsp;</span><i className="fa-solid fa-thumbs-down"></i>
          </div>
        </div>
    </div>
    )
  };
};

export default ReviewIndexItem;