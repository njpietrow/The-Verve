import React from "react";
import { Link } from "react-router-dom";

class ResultsIndex extends React.Component{
  render(){
    const {searchResults, search} = this.props;
    if (Object.keys(searchResults).length === 0) return null
    return(
      <div className={search ? "results-container" : "results-container hide"}>
        <ul className="results-list">
          {Object.values(searchResults).map(result => (
            <div className="result-item" key={result.id}>
              <Link 
                to={`/collections/${result.id}`}
                className="result-item-link"
              >
                <div className="result-item-content">
                  <img
                    className="result-image" 
                    src={"https://cdn.shopify.com/s/files/1/0035/9372/products/Nubianewcoffee_2048x2048.png?v=1645143809"} 
                  />
                  <div className="result-item-text">
                    {result.productName}
                  </div>
                </div>
              </Link>

            </div>
          ))}
        </ul>
      </div>
    )
  }
};

export default ResultsIndex;