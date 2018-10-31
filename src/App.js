import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/common/navbar";
import ToDos from "./components/toDoList";
import NewToDo from "./components/newToDo";
import Home from "./components/home";
import NotFound from "./components/notFound";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/newtodo" component={NewToDo} />
            <Route path="/todolist" component={ToDos} />
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
