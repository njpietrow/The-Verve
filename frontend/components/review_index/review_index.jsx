import React from "react";
import ReviewIndexItem from "./review_index_item";
import { averageRating } from "../../util/string_util";

class ReviewIndex extends React.Component{
  render(){
    const {reviews} = this.props;
    return(
      <div id="review-index-container">
        <div className="review-index-title">
          <h1>Customer Reviews</h1>
          <div className="review-summary">
             <span>
                Stars: {averageRating(Object.values(reviews))}
                <br /> 
                based on {Object.values(reviews).length} reviews
             </span>
             <div className="stars-summary">
              I am the stars summary table              
             </div>
          </div>
        </div>
        {
          Object.values(reviews).map(review => (
            <ReviewIndexItem key={review.id} review={review} />
          ))
        }
      </div>
    )
  };
};

export default ReviewIndex;