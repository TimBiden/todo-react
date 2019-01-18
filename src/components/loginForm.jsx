import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };

    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Submit to server
    const email = this.state.account.email;
    const password = this.state.account.password;

    // Log Results
    console.log(email);
    console.log(password);
    console.log("Submitted.");
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              autoFocus
              value={account.email}
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
              value={account.password}
              onChange={this.handleChange}
              name={"password"}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
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
