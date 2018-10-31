import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/newtodo">Create New</Link>
      </li>
      <li>
        <Link to="/todolist">To-Do List</Link>
      </li>
      <li>
        <Link to="/">Log Out</Link>
      </li>
    </ul>
  );
};

export default NavBar;
