import React from "react";

import Form from "react-bootstrap/Form";
import ModuleListItem from "../Module/ModuleListItem";
import { useState } from "react";




export default function ModuleDetailsForm() {
  
  return (

    <div className="p-5">
      <div className="p-2"><h2>Create New Module</h2></div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Priority</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
  
    
    
    
  );
}
