import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import validate from "./Components/LoginFormValidationRules";
import useForm from "./Components/useForm";
import axios from 'axios';
import "./BudgetDetailForm.css";

const now = 60;
const now2 = 1;

function BudgetDetailForm() {
  const submit = () => {

    console.log(values)
    axios
    .post('http://localhost:5148/api/Budget',
    {
     // Id:values.projectId,
      Received:0,
      yetToReceive:values.price,
      actualcost: values.actualtime*values.rate,
      hourlyCost:values.rate,
      plannedcost: values.cost,
      totalBudget:values.price,
     
    })
    .then (
      Response=>{ 
        console.log(Response)
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  };
  const [projects, setProjects]=useState([])
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate,
    projects
  );

  
  useEffect(()=>{
    axios
    .get('http://localhost:5148/api/Poject')
    .then (
      Response=>{ 
        setProjects(Response.data.result)
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  },[])

  useEffect(()=>{
    console.log(values)
  },[values]

  )

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="project-input"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>project Name</Form.Label>
          <Form.Control
            type="text"
            name="projectName"
            value={values.projectName || ""}
            readOnly={true}
          />
         {errors.project && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.project}
            </p>
          )}
        </Form.Group>
        <Form.Group
          className="projectid-input"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>project ID</Form.Label>
          <Form.Select name="projectId" onChange={handleChange} aria-label="Default select example">
           { projects.map((project)=>
            <option value={project.id}>{project.id}</option>
           )}
            
          </Form.Select>
          {errors.projectid && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.projectid}
            </p>
          )}
        </Form.Group>
        <InputGroup
          className="input-group-1"
          controlId="exampleForm.ControlInput1"
        >
          <Col className="rate-input">
            <Form.Label>Estimated Hourly Rate</Form.Label>
            <InputGroup className="price" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="rate"
                onChange={handleChange}
                value={values.rate || 0}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.rate && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.rate}
              </p>
            )}
          </Col>
          <Col className="cost-input">
            <Form.Label>Estimated Total Cost </Form.Label>
            <InputGroup controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="cost"
                onChange={handleChange}
                value={values.cost||0}
                readOnly={true}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.cost && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.cost}
              </p>
            )}
          </Col>
        </InputGroup>
        <InputGroup
          className="input-group-1"
          controlId="exampleForm.ControlInput1"
        >
          <Col className="price-input">
            <Form.Label>Price </Form.Label>
            <InputGroup className="price" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="price"
                onChange={handleChange}
                value={values.price || 0}
                readOnly={true}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.price && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.price}
              </p>
            )}
          </Col>
          <Col className="profit-input">
            <Form.Label>Profit </Form.Label>
            <InputGroup controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="profit"
                onChange={handleChange}
                value={values.profit || 0}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.profit && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.profit}
              </p>
            )}
          </Col>
        </InputGroup>
        <Form.Group
          className="record-input"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Recorded By</Form.Label>
          <Form.Control
            type="text"
            name="record"
            onChange={handleChange}
            value={values.record || ""}
          />
          {errors.record && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.record}
            </p>
          )}
          <div>
            <Button
              style={{ width: "100px", height: "50px", margin: "10px" }}
              className="me-1 float-end"
              type="submit"
            >
              Add
            </Button>
            <Button 
              style={{ width: "100px", height: "50px", margin: "10px" }}
              className="me-1 float-end"
              type="reset"
            >
              Cancel
            </Button>
            
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default BudgetDetailForm;
