import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: ""
    },
    errors: {}
  };

  // Find errors: `currentError = errors['username']` etc.

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };

    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    return { email: "Email Address is required." };
  };

  handleSubmit = event => {
    event.preventDefault();

    const err = this.validate();
    this.setState({ errors });
    if (this.state.errors) return;

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
          <Input
            name="email"
            label="Email"
            value={account.email}
            onChange={this.handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <br />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
