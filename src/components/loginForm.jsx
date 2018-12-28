import React, { Component } from "react";

class LoginForm extends Component {
  email = React.createRef();
  password = React.createRef();
  checkbox = React.createRef();

  handleSubmit = event => {
    event.preventDefault();

    // Submit to server
    const email = this.email.current.value;
    const password = this.password.current.value;
    const checkbox = this.checkbox.current.checked;

    // Log Results
    console.log(email);
    console.log(password);
    console.log(checkbox);
    console.log("Submitted.");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              autoFocus
              ref={this.email}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              ref={this.password}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              ref={this.checkbox}
              type="checkbox"
              className="form-check-input"
              id="stayLoggedIn"
            />
            <label className="form-check-label" htmlFor="stayLoggedIn">
              Stay logged in.
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
