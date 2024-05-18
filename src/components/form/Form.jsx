import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Form(props) {
  return (
    <div className="app">
      <form className="submit-form" onSubmit={props.handleForm}>
        <div className="mb-2">
          <h2>{props.title}</h2>
          <hr />
        </div>
        <div className="flex mb-2">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="flex mb-2">
          <label htmlFor="">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="flex mb-2">
          <button className="btn btn-submit">{props.title}</button>
          <NavLink to={'/'}>
            <button className="btn btn-cancel">Cancel</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
