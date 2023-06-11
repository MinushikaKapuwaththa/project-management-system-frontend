import React from "react";
import ModuleListItem from "./ModuleListItem";
import axios from "axios";
import { useState } from "react";
import { createModule } from "../../services/moduleService";
import ModuleRedioButton from "./ModuleRedioButton";


export default function ModuleForm() {

  const[name, setName] = useState("");
  const[description, setdescription] = useState("");
  const[priority, setpriority] = useState("");
  const[startdate,setstartdate]=useState("");

  const handleSubmit = async () => {
    var data = {
      id: 0,
      name: name,
      description: description,
      priority: priority,
      tasks: [],
      startdate:startdate,
    };
    createModule(data);
  };

  return (
    <div className="p-5">
      <div className="p-2"><h2>Create New Module</h2></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            onChange={(e)=> setdescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Priority</label>
          <input
            type="text"
            className="form-control"
            placeholder="Priority"
            onChange={(e)=> setpriority(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Start Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
            onChange={(e)=> setstartdate(e.target.value)}
          />
        </div>

       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
