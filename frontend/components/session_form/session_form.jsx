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

  //DISPLAY ERROR MESSAGES
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

  // LIFECYCLE METHODS
  componentDidMount(){
    this.unlisten = this.props.history.listen(() => {
      this.props.clearSessionErrors();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }  

  render(){
    const {formType} = this.props
    const register = (formType === "Register");

    return(
      <div>
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
        </form>

        <Link to={register ? "/login" : "/register"}>
          {register ? "Login to an Existing Account" : "Register a New Account"}
        </Link>
      </div>
    )
  }
}

export default SessionForm;