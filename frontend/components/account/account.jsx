import React from "react";

class Account extends React.Component{
  render(){
    const {logOut, currentUser} = this.props;
    return(
      <div>
        <h2>Account Information</h2>
        <div>
          <h4>Name, Email</h4>
          <ul>
            <li>Name field TBD</li>
            <li>{currentUser.email}</li>
          </ul>
        </div>
        <button onClick={() => logOut()}>Log out</button>
      </div>
    )
  }
}

export default Account;