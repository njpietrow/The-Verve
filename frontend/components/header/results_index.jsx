import React from "react";
import { Link } from "react-router-dom";

class ResultsIndex extends React.Component{
  render(){
    // get results from props
    return(
      <div className="results-container">
        <ul>
          <li>Result 1</li>
          <li>Result 2</li>
        </ul>
      </div>
    )
  }
};

export default ResultsIndex;