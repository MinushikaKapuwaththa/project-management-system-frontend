import React from "react";
import Form from "react-bootstrap/Form";
import ModuleListItem from "../Module/ModuleListItem";
import { useState, useEffect } from "react";
import { updateModule, getModulesByID } from "../../services/moduleService";
import { useParams, useHistory } from "react-router-dom";

export default function ModuleDetailsForm() {
  const [description, setdescription] = useState("");
  const [priority, setpriority] = useState("");
  const [enddate, setenddate] = useState("");
  const [module, setModule] = useState({});
  const [errorDescription, setErrorDescription] = useState("");
  const [errorPriority, setErrorPriority] = useState("");

  const { id } = useParams();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description && !priority) {
      setErrorDescription("Description is required");
      setErrorPriority("Priority is required");
      return;
    } else {
      setErrorDescription("");
      setErrorPriority("");
    }

    var data = {
      created: module.created,
      updated: module.updated,
      isDeleted: module.isDeleted,
      deleted: module.deleted,
      id: Number(id),
      status: module.status,
      name: module.name,
      description: description,
      priority: priority,
      startDate: module.startDate,
      endDate: enddate,
      tasks: [],
    };
    updateModule(data).then(() => {
      history.push("/project-module");
    });
  };

  useEffect(() => {
    getModulesByID(id).then((res) => {
      const _data = res.data.result;
      console.log(_data)
      _data.startDate = _data.startDate;
      setModule(_data);
      setdescription(res.data.result.description);
      setpriority(res.data.result.priority);
      setenddate(res.data.result.endDate);
      console.log(res.data.result);
    });
  }, []);

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
            value={description}
            // defaultValue={module.description}
            className="form-control"
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          />
          {errorDescription && (
            <small className="text-danger">{errorDescription}</small>
          )}
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
          {errorPriority && (
            <small className="text-danger">{errorPriority}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            value={module.startDate}
            className="form-control"
            id="startDate"
            readOnly="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            value={enddate}
            className="form-control"
            id="endDate"
            onChange={(e) => {
              debugger;
              setenddate(e.target.value);
            }}
          />
          {/* {console.log(enddate)}
          <input type="date" value={enddate} /> */}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
