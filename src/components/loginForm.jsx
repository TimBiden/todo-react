import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    // Call server
    // Save changes
    // Redirect to new page
    console.log(e);
    console.log("So far, so good. So what?");
  };

  render() {
    return (
      <div>
        <h2>Login. Start getting your life priotitized!</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email Address</label>
            <input id="username" type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
