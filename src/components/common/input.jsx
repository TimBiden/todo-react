import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        type="email"
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
        placeholder={"Enter " + label}
      />
    </div>
  );
};

export default Input;
