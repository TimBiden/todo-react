import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: "",
      checkbox: ""
    }
  };

  handleChange = event => {
    const account = { ...this.state.account };

    if (event.currentTarget.name === "checkbox") {
      console.log(event.currentTarget);
      account[event.currentTarget.name] = event.currentTarget.checked;
    }

    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Submit to server
    const email = this.state.account.email;
    const password = this.state.account.password;
    const checkbox = this.state.account.checkbox;

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
              value={this.state.account.email}
              onChange={this.handleChange}
              name={"email"}
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
              value={this.state.account.password}
              onChange={this.handleChange}
              name={"password"}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              value={this.state.account.checkbox}
              onChange={this.handleChange}
              name={"checkbox"}
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
