import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/common/navbar';
import ToDos from './components/toDoList';
import NewToDo from './components/newToDo';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <main role="main" className="container">
            <NavBar />
            <h1>From DO to DONE</h1>

            <div className='content'>
                <Switch>
                    <Route path='/posts/:year/:month' component={Posts} />
                    <Route path='/newtodo' component={NewToDo} />
                    <Route path='/todolist' component={ToDos} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </main>
    );
  }
}

export default App;
