import React from "react";
import ReviewIndexItem from "./review_index_item";
import ReviewFormContainer from "./review_form_container";
import { Link } from "react-router-dom";
import Stars from "./stars";

class ReviewIndex extends React.Component{
  getReviewMessage(reviews){
    const numReviews = Object.values(reviews).length;
    if (numReviews === 0) {
      return <span>This product has not yet received any reviews</span>
    } else if (numReviews === 1) {
      return <span>Based on 1 review</span> 
    } else {
      return <span>Based on {Object.values(reviews).length} reviews</span> 
    }
  }

  render(){
    const {reviews, averageRating, currentUserId, productId, createLike, likeErrors} = this.props;

    return(
      <div id="review-index-container">
        <div className="review-index-title">
          <h1>Customer Reviews</h1>
          <div className="review-summary">
             <span>
                <Stars averageRating={averageRating} />
                <br /> 
                {this.getReviewMessage(reviews)}
             </span>
             <div className="like-errors">
              {likeErrors.map((err,idx) => (<span key={idx}>{err}</span>))}
            </div>
          </div>
        </div>
        <div className="review-index-list">
          {Object.values(reviews).map(review => (
            <ReviewIndexItem
              key={review.id} 
              review={review} 
              createLike={createLike}
              currentUserId={currentUserId}
            />
          ))}
        </div>
        {currentUserId ? (
          <ReviewFormContainer productId={productId} />
        ) : (
          <div className="login-for-review">
            <Link to="/login" className="review-form-login">Log in</Link>
            <span> to leave a review ☕️</span>
          </div>)}
      </div>
    )
  };
};

export default ReviewIndex;