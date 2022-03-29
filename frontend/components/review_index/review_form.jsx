import React from "react";

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
        const nodeList = document.querySelectorAll("input[type=radio]");
        for (let i = 0; i < nodeList.length; i++) {
          console.log(nodeList[i])
          nodeList[i].removeAttribute("checked");
        }
      });
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
    console.log(this.state.stars)
    return(
      <form className="review-form" onSubmit={this.handleSubmit}>
        <h4 className="leave-review-title">Leave a Review</h4>
        {this.renderErrors()}
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
        <input checked={1 == this.state.stars} type="radio" name="stars" value={1} onChange={this.update("stars")}/>
        <input checked={2 == this.state.stars} type="radio" name="stars" value={2} onChange={this.update("stars")}/>
        <input checked={3 == this.state.stars} type="radio" name="stars" value={3} onChange={this.update("stars")}/>
        <input checked={4 == this.state.stars} type="radio" name="stars" value={4} onChange={this.update("stars")}/>
        <input checked={5 == this.state.stars} type="radio" name="stars" value={5} onChange={this.update("stars")}/>
        <br /><br />
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