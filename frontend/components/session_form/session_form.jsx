import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //CONTROLLED INPUT FORM METHODS
  handleSubmit(e){
    e.preventDefault()
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  // LIFECYCLE METHODS
  componentDidMount(){
    this.unlisten = this.props.history.listen(() => {
      this.props.clearSessionErrors();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }  

  //HELPER METHODS FOR DISPLAYING INFO ON FORM
  renderErrors(){
    const {errors} = this.props
    return(
      <ul className="session-error-list">
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
    )
  }

  demoButton(){
    return (
      this.props.formType === "Register" ? (
        null
      ) : (
        <a 
          className="demo-login-button"
          onClick={(e) => {
              e.preventDefault()
              this.props.loginDemo()
            }
          }
        >
          Login as Demo User
        </a>
      )
    )
  }

  registrationFields(){
    return (
      this.props.formType === "Register" ? (
        <>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            name="firstName"
            onChange={this.update("first_name")}
            value={this.state.first_name}
          />
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            name="lastName"
            onChange={this.update("last_name")}
            value={this.state.last_name}
          />
        </>
      ) : (
        null
      )
    )
  }

  render(){
    const {formType} = this.props
    const register = (formType === "Register");

    return(
      <div className="session-form-container">
        <h2>
          {register ? "Create an Account" : "Log In"}
        </h2>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.registrationFields()}
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email"
            onChange={this.update("email")}
            value={this.state.email}
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            onChange={this.update("password")}
            value={this.state.password}
          />
          <input 
            type="submit" 
            className="session-button" 
            value={formType}  
          />
          {this.demoButton()}
        </form>
        <Link 
          to={register ? "/login" : "/register"}
        >
          {register ? "Login to an Existing Account" : "Register a New Account"}
        </Link>
      </div>
    )
  }
}

export default SessionForm;