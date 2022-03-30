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

  // LIFECYCLE METHODS
  componentDidMount(){
    this.unlisten = this.props.history.listen(() => {
      this.props.clearSessionErrors();
    });
    window.scroll({top: 0, left: 0})
  }

  componentWillUnmount() {
    this.unlisten();
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

  //fill out form visually for user and then loginDemo User
  mockTyping(){
    this.setState({
      email: "",
      password: "",
    });
    const email = "DemoUser@gmail.com";
    const password = "password"
    let count = 0;
    this.loginDemoInterval = setInterval(() => {
      this.setState({
        email: count<email.length ? (this.state.email.concat(email[count])) : email,
        password: count<password.length ? (this.state.password.concat(password[count])) : password,
      });
      count++;
      if (count === 25) {
        clearInterval(this.loginDemoInterval);
        this.props.loginDemo();
      }
    }, 80);
  }

  demoButton(){
    return (
      this.props.formType === "Register" ? (
        null
      ) : (
        <a 
          className="demo-login-button"
          onClick={(e) => {
              e.preventDefault();
              this.mockTyping();
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
            placeholder="First Name"
            type="text" 
            name="firstName"
            onChange={this.update("first_name")}
            value={this.state.first_name}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Last Name" 
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
    let passwordPlaceholder = "Password";
    let emailPlaceholder = "Email";
    if (register){
      passwordPlaceholder = "Password (required)"
      emailPlaceholder = "Email (required)"
    }

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
            placeholder={emailPlaceholder}
            type="email" 
            name="email"
            onChange={this.update("email")}
            value={this.state.email}
          />
          <label htmlFor="password">Password</label>
          <input 
            placeholder={passwordPlaceholder}
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
          className="switch-form-link"
        >
          {register ? "Login to an Existing Account" : "Register a New Account"}
        </Link>
      </div>
    )
  }
}

export default SessionForm;