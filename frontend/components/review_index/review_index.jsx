import React from "react";

class ReviewIndex extends React.Component{
  render(){
    return(
      <div id="review-index-container">
        <div className="review-index-title">
          <h1>Customer Reviews</h1>
          <div className="review-summary">
             <span>--Stars-- <br /> based on @num reviews</span>
             <div className="stars-summary">
              I am the starts summary              
             </div>
          </div>
        </div>
        review index item mapping starts here.
        <br />
        review index items have a top border.
      </div>
    )
  };
};

export default ReviewIndex;