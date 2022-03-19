import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
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
    if(!errors) return null;
    return(
      <ul>
        {errors.map((error,idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  demoButton(){
    return (
      this.props.formType === "Register" ? (
        null
      ) : (
        <button 
          className="orange-button"
          onClick={(e) => {
              e.preventDefault()
              this.props.loginDemo()
            }
          }
        >
          Login as Demo User
        </button>
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
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input 
              type="email" 
              onChange={this.update("email")}
              value={this.state.email}
            />
          </label>
          <br />
          <label>Password:
            <input 
              type="password" 
              onChange={this.update("password")}
              value={this.state.password}
            />
          </label>
          <br />
          <input type="submit" value={formType}/>
          {this.demoButton()}
        </form>
        <br />
        <Link 
          to={register ? "/login" : "/register"}
          className="orange-button"
        >
          {register ? "Login to an Existing Account" : "Register a New Account"}
        </Link>
      </div>
    )
  }
}

export default SessionForm;