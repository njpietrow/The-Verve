import React from "react";

class Account extends React.Component{
  

  render(){
    const {logOut, currentUser} = this.props;
    return(
      <div className="account-container">
        <h2>Account Information</h2>
        <div className="account-content-container">
          <div className="account-info-container">
            <h4 className="bold">Primary Shipping Address</h4>
            <p>
              {`${currentUser.firstName} ${currentUser.lastName}`}
              <br />
              United States
            </p>
          </div>
          <div className="account-info-container">
            <h4 className="bold">Name, Email</h4>
            <p>
              {`${currentUser.firstName} ${currentUser.lastName}`}
              <br />
              {currentUser.email}
            </p>
            <button 
              onClick={() => logOut()}
              className="session-button logout"
            >
              Log out
            </button>
          </div>
        </div>
        <br />
        <br />
        <div>--------------------------------------------------------------</div>
        <div>
          <h2>Order History</h2>
        </div>
      </div>
    )
  }
}

export default Account;