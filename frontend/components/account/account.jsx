import React from "react";

class Account extends React.Component{
  
  componentDidMount(){
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

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
        <div  className="row-spacer"></div>
        <div className="order-history">
          <h2>Order History</h2>
          <table className="table order-table">
            <thead>
              <tr className="table order-table-header">
                <th>Order Date</th>
                <th>Order Number</th>
                <th>Items</th>
                <th>Total</th>
                <th>Shipping Status</th>
              </tr>
            </thead>
            <tbody>
            
              <tr><td>You haven't placed any orders yet.</td></tr>
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Account;