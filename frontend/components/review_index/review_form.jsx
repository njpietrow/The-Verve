// import React from "react";
import React, { useState } from "react";

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUserId,
      product_id: this.props.productId,
      title: "",
      body: "",
      stars: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(this.state)
      .then(() => {
        this.setState({
          title: "",
          body: "",
          stars: "",
        })
      });
  }

  componentDidMount(){
    this.unlisten = this.props.history.listen(() => {
      this.props.clearReviewErrors();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }  

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  renderErrors(){
    const {errors} = this.props
    return(
      <div>
        <ul className="review-errors">
          {(errors.length === 0) ? (
            null
          ) : (
            errors.map((error,idx) => (
              <li key={idx}>
                {error}
              </li>
            ))
          )}
        </ul>
      </div>
    )
  }

  render(){
    return(
      <form className="review-form" onSubmit={this.handleSubmit}>
        <h4 className="leave-review-title">Leave a Review</h4>
        {this.renderErrors()}
        <label htmlFor="title">Title:</label>
        <input
          maxLength = "55"
          className="review-title"
          type="text" 
          value={this.state.title}
          onChange={this.update("title")}
        /> <br /> <br />
        <label htmlFor="body">Body:</label>
        <textarea
          maxLength = "350"
          className="review-body"
          value={this.state.body}
          onChange={this.update("body")}
        /><br /> <br />

        <label htmlFor="rating">Rating:</label>
        <div className="rating-select" name="rating">
          {[...Array(5)].map((_, idx) => {
            idx += 1;
            return (
              <button
                type="button"
                key={idx}
                value={idx}
                className={idx <= this.state.stars ? "star-button on" : "star-button off"}
                onClick={this.update("stars")}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div><br />

        <input
          type="submit" 
          className="add-cart-button review-submit"
          value="Publish Review"
        />
      </form>
    )
  };
};

export default ReviewForm;