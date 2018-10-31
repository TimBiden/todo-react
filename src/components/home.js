import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
        <p>A To-Do List that automatically organizes what you need to do, based upon certain criteria. You input these when you create a new item in your To-Do List and a basic algorithm does the rest for you.
        <br />
        <br />
        It considers things like importance, urgency, and how long something will take to give your tasks a priority value. And remember, urgency ≠ importance.</p>
    );
  }
}

export default Home;
