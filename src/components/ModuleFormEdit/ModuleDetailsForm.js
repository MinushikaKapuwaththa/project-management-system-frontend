import React from "react";
import Form from "react-bootstrap/Form";
import ModuleListItem from "../Module/ModuleListItem";
import { useState, useEffect } from "react";
import { updateModule, getModulesByID } from "../../services/moduleService";
import { useParams } from "react-router-dom";

export default function ModuleDetailsForm() {
  const [description, setdescription] = useState("");
  const [priority, setpriority] = useState("");
  const [enddate, setenddate] = useState("");
  const [module, setModule] = useState({});
  const [errors,setErrors]= useState("");
  const { id } = useParams();

  const handleSubmit = async (e) => {

    e.preventDefault();
debugger;
     // Validate the form
     const validationErrors = validateForm();
     if (Object.keys(validationErrors).length > 0) {
       setErrors(validationErrors);
       return;
     }

    var data = {
      created: "2023-06-13T06:36:43.565Z",
      updated: "2023-06-13T06:36:43.565Z",
      isDeleted: false,
      deleted: "2023-06-13T06:36:43.565Z",
      id: Number(id),
      status: "string",
      name: "string",
      description: description,
      priority: priority,
      startDate: "2023-06-13T06:36:43.565Z",
      endDate: enddate,
      tasks: [],
    };
    updateModule(data);
  };

  useEffect(() => {
    getModulesByID(id).then((res) => {
      setModule(res.data.result);
      console.log(res.data.result);
    });
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!description.trim()) {
      errors.description = "Description is required";
    }

    if (!priority.trim()) {
      errors.priority = "Priority is required";
    }

    if (!enddate) {
      errors.enddate = "End Date is required";
    }

    return errors;
  };


  return (
    <div className="container shadow p-3 mb-5 bg-light rounded">
      <div className="p-2">
        <h2>Edit Module Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Module ID</label>
          <input
            type="text"
            className="form-control"
            id="name"
            defaultValue={module.id}
            placeholder="name"
            readOnly="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            defaultValue={module.name}
            placeholder="name"
            readOnly="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            defaultValue={module.description}
            className="form-control"
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          />
           {errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Priority</label>
          <input
            type="text"
            className="form-control"
            placeholder="Priority"
            defaultValue={module.priority}
            onChange={(e) => setpriority(e.target.value)}
          />
         {errors.priority && <div className="invalid-feedback">{errors.priority}</div>} 
        </div>

        <div className="form-group">
          <label htmlFor="name">Start Date</label>
          <input
            type="text"
            defaultValue={module.startDate}
            className="form-control"
            id="name"
            readOnly="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">End Date</label>
          <input
            type="date"
            value={enddate}
            defaultValue={module.endDate}
            className="form-control"
            id="name"
            onChange={(e) => setenddate(e.target.value)}
          />
           {errors.enddate && <div className="invalid-feedback">{errors.enddate}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
