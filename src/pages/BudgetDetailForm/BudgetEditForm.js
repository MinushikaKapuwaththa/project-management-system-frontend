import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import validate from "./Components/BudgetDetailValidation ";
import BudgetUseForm from "./Components/BudgetUseForm";
import axios from 'axios';
import "./BudgetDetailForm.css";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function BudgetDetailForm() {
  const [lgShow, setLgShow] = useState(false)
  const {projectId}=useParams();

  const submit = () => {

    console.log(values)
    axios
    .put('http://localhost:5148/api/Budget/update',
    {
      projectId:values.projectId,
      Received:0, 
      yetToReceive:values.price,
      actualcost: values.actualtime*values.EstimatedHourlyRate,
      hourlyCost:values.EstimatedHourlyRate,
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
  const { values,setValues, handleChange, handleSubmit, errors } = BudgetUseForm(
    submit,
    validate
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(()=>{
    axios
    .get(`http://localhost:5148/api/Budget/ProjectId/${projectId}`)
    .then (
      Response=>{
        console.log(Response.data.result)
        setValues(values =>({ ...values, "projectName":Response.data.result.Name,"projectId":Response.data.result.projectId,"cost":Response.data.result.totalBudget,"price":Response.data.result.actualcost}));
       
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  },[])     

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
           <div style={{ paddingTop: "20px" }}>
          <h3 className="text-center"> Edit Budget Form</h3>
        </div>
        <div className="container shadow p-1000 t-1000 b-1000 w-50 mb-3 bg-light text-dark rounded ">
        <div className="row">
          <div className="col">
        <Form.Group
          className="project-input,,mb-3 w-75 text-left"
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
        </div>
        <div className="col">
        <Form.Group
          className="projectid-input,,mb-3 w-75 text-left"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>project ID</Form.Label>
          <Form.Control
            type="text"
            name="projectId"
            value={values.projectId || ""}
            readOnly={true}
          />
          {errors.projectid && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.projectid}
            </p>
          )}
        </Form.Group>
        </div>
        </div>
        
        <InputGroup
          className="input-group-1"
          controlId="exampleForm.ControlInput1"
        >
          <Col className="rate-input,mb-3 w-75 text-left">
            <Form.Label>Estimated Hourly Rate</Form.Label>
            <InputGroup className="price" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                name="EstimatedHourlyRate"
                onChange={handleChange}
                value={values.EstimatedHourlyRate|| 0}
                aria-label="Amount (to the nearest Rupeels)"
              />
              <InputGroup.Text>LKR</InputGroup.Text>
            </InputGroup>
            {errors.EstimatedHourlyRate && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.EstimatedHourlyRate}
              </p>
            )}
          </Col>
          <Col className="cost-input,mb-3 w-75 text-left">
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
          <Col className="price-input,mb-3 w-75 text-left">
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
          <Col className="profit-input,mb-3 w-75 text-left">
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
          className="record-input,mb-3 w-75 text-left"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Recorded By</Form.Label>
          <Form.Control
            type="text,mb-3 w-75 text-left"
            name="record"
            onChange={handleChange}
            value={values.record || ""}
          />
          {errors.record && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.record}
            </p>
          )}
         
          <div className="ma"style={{ bottom: "0px", left: "10px"}}>
            <Button className="btn btn-primary" style={{ width: "100px", height: "50px", margin: "10px"}}type="submit"> Add </Button>
          <Button className="btn btn-primary" style={{ width: "100px", height: "50px", margin: "10px"  }} type="reset"> Cancel </Button>
           </div>
         </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default BudgetDetailForm;
