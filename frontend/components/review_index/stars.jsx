import React from "react";

class Stars extends React.Component{

  getStars(){
    if (this.props.averageRating === "No Reviews Yet"){
      return "☆☆☆☆☆";
    }
    const rating = Math.round(this.props.averageRating);
    return [...Array(5)].map((_,idx) => {
      if (idx+1 <= rating) return "★"
      return "☆"
    })
  }

  render(){
    return(
      <span className="stars">{this.getStars()}</span>
    )
  }
};

export default Stars;