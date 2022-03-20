import React from "react";

class Account extends React.Component{
  render(){
    const {logOut, currentUser} = this.props;
    return(
      <div className="account-container">
        <h2>Account Information</h2>
        <div>
          <div>
            <h4 className="bold">Primary Shipping Address</h4>
            <p>
              Name field TBD
              <br />
              United States
            </p>
          </div>
          <div>
            <h4 className="bold">Name, Email</h4>
            <p>
              Name field TBD
              <br />
              {currentUser.email}
            </p>
            <button 
              onClick={() => logOut()}
              className="session-button"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Account;