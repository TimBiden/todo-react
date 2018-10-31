import React, { Component } from "react";

class NewToDo extends Component {
  handleSave = () => {
    // Need to calculate priority & send data to DB.
    console.log("data");
    this.props.history.push("/todolist");
  };

  render() {
    // Need form to add item.

    return (
      <div>
        <h1>From DO to DONE</h1>

        <h2>Add new items here.</h2>

        <button onClick={this.handleSave}>Priotitize!</button>
      </div>
    );
  }
}

export default NewToDo;
