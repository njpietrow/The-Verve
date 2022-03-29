import React from "react";
import ReviewIndexItem from "./review_index_item";
import ReviewFormContainer from "./review_form_container";
import { Link } from "react-router-dom";
import Stars from "./stars";

class ReviewIndex extends React.Component{
  render(){
    const {reviews, averageRating, loggedIn, productId} = this.props;
    return(
      <div id="review-index-container">
        <div className="review-index-title">
          <h1>Customer Reviews</h1>
          <div className="review-summary">
             <span>
                <Stars averageRating={averageRating} />
                <br /> 
                {(Object.values(reviews).length !== 0) ? (
                  <span>Based on {Object.values(reviews).length} reviews</span> 
                ) : (
                  <span>This product has not yet received any reviews</span>
                )}
             </span>
          </div>
        </div>
        <div className="review-index-list">
          {Object.values(reviews).map(review => (
              <ReviewIndexItem key={review.id} review={review} />
          ))}
        </div>
        {loggedIn ? (
          <ReviewFormContainer productId={productId} />
        ) : (
          <div className="login-for-review">
            <Link 
              to="/login" 
              className="review-form-login"
            > Log in</Link>
            <span> to leave a review ☕️</span>
          </div>)}
      </div>
    )
  };
};

export default ReviewIndex;