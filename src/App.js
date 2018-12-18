import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/common/navbar";
import ToDos from "./components/toDoList";
import NewToDo from "./components/newToDo";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import NotFound from "./components/notFound";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <NavBar />
        <div className="content">
          {/* These are activated in the order they're found. */}
          {/* "/not-found" MUST go after everything else.*/}
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/newtodo" component={NewToDo} />
            <Route path="/todolist" component={ToDos} />
            <Redirect from="/messages" to="/todolist" />
            <Route path="/" exact component={Home} />

            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
