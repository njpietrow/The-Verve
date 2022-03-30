import React from "react";
import Stars from "./stars";

class ReviewIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUserId,
      review_id: this.props.review.id,
      dislike: "",
      loggedInError: "",
      status: ""
    };
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(dislike){
    if (dislike) this.setState({status: "down"})
    else this.setState({status: "up"})

    if (!this.state.user_id) {
      this.setState({loggedInError: "Please log in before voting on reviews"})
    } else {
      this.setState({loggedInError: ""})
      this.state.dislike = dislike;
      this.props.createLike(this.state);
    }
  }

  render(){
    const {review, likeErrors} = this.props;
    return(
      <div className="review-index-item">
        <div className="profile-container">
          <div className="flex">
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
          <div className="like-errors">
            {this.state.loggedInError}
          </div>
        </div>
        <div className="review-section">
          <div className="review-content">
            <h5 className="reviewer-title">{review.title}</h5>
            <p>{review.body}</p>
          </div>
          <div className="voting-container">
            <div className="voting-button-container">
              <div className="like-button">
                <span>{review.likeCount}&nbsp;</span>
                <span 
                  onClick={() => {
                    this.handleVote(false)
                  }}
                  className={this.state.status === "up" ? "voting-button lit" : "voting-button"}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
              </div>
              <div className="dislike-button">
                <span>{review.dislikeCount}&nbsp;</span>
                <span 
                  onClick={() => {
                    this.handleVote(true)
                  }}
                  className={this.state.status === "down" ? "voting-button lit" : "voting-button"}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  };
};

export default ReviewIndexItem;