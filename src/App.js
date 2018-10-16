import React, { Component } from 'react';
import ToDos from './components/toDoList';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  render() {
    return (
        <main role="main" className="container">
            <h1>From DO to DONE</h1>
            <ToDos />
        </main>
    );
  }
}

export default App;
