import React from "react";

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUserId,
      product_id: this.props.productId,
      title: "",
      body: "",
      stars: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(this.state);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <form className="review-form" onSubmit={this.handleSubmit}>
        <h4>Leave a Review</h4>
        <label htmlFor="title">Title:</label><br />
        <input
          maxLength = "55"
          className="review-title"
          type="text" 
          value={this.state.title}
          onChange={this.update("title")}
        /> <br /> <br />
        <label htmlFor="body">Body:</label><br />
        <textarea
          maxLength = "350"
          className="review-body"
          value={this.state.body}
          onChange={this.update("body")}
        /><br /> <br />
        <label htmlFor="stars">Rating:</label> <br />
        <input type="radio" name="stars" value={1} onChange={this.update("stars")}/>
        <input type="radio" name="stars" value={2} onChange={this.update("stars")}/>
        <input type="radio" name="stars" value={3} onChange={this.update("stars")}/>
        <input type="radio" name="stars" value={4} onChange={this.update("stars")}/>
        <input type="radio" name="stars" value={5} onChange={this.update("stars")}/>
        <br />
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