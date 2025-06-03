import React from "react";
import { useState } from "react";
import { createModule } from "../../services/moduleService";

export default function ModuleForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [description, setdescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priority, setpriority] = useState("");
  const [priorityError, setPriorityError] = useState("");
  const [status,setStauts]= useState("");
  const [statusError, setStatusError] = useState("");
  const [startdate, setstartdate] = useState("");
  const [startdateError, setStartdateError] = useState("");
  const [enddate, setenddate] = useState("");
  const [enddateError, setEnddateError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset previous error messages
    setNameError("");
    setDescriptionError("");
    setPriorityError("");
    setStatusError("");
    setStartdateError("");
    setEnddateError("");

    let isValid = true;

    // Validate name
    if (name.trim() === "") {
      setNameError("Name is required.");
      isValid = false;
    }

    // Validate description
    if (description.trim() === "") {
      setDescriptionError("Description is required.");
      isValid = false;
    }

    // Validate priority
    if (priority.trim() === "") {
      setPriorityError("Priority is required.");
      isValid = false;
    }

    if (status.trim() === "") {
      setStatusError("Status is required.");
      isValid = false;
    }

    // Validate start date
    if (startdate === "") {
      setStartdateError("Start Date is required.");
      isValid = false;
    }

    // Validate end date
    if (enddate === "") {
      setEnddateError("End Date is required.");
      isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
      var data = {
        id: 0,
        name: name,
        description: description,
        priority: priority,
        status:status,
        tasks: [],
        startDate: startdate,
        endDate: enddate,
      };
      createModule(data);
    } else return false;
  };

  return (
    <div className="container shadow p-3 mb-5 bg-light rounded">
      <div className="p-2 ">
        <h2>Create New Module</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="text-danger">{nameError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          />
           {descriptionError && <div className="text-danger">{descriptionError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Priority</label>
          <input
            type="text"
            className="form-control"
            placeholder="Priority"
            onChange={(e) => setpriority(e.target.value)}
          />
          {priorityError && <div className="text-danger">{priorityError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Status</label>
          <input
            type="text"
            className="form-control"
            placeholder="status"
            onChange={(e) => setStauts(e.target.value)}
          />
          {statusError && <div className="text-danger">{statusError}</div>}
        </div>



        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Start Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
            onChange={(e) => setstartdate(e.target.value)}
          />
          {startdateError && <div className="text-danger">{startdateError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">End Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="End Date"
            onChange={(e) => setenddate(e.target.value)}
          />
          {enddateError && <div className="text-danger">{enddateError}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
