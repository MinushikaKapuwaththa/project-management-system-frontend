import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function AddNewCompany() {
  const [OwnerName, setFullName] = useState("");
  const [CompanyName, setEmployeeId] = useState("");
  const [Status, setPosition] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);
  const [startdate, setStartdate] = useState(new Date());

  const handleStartdateChange = (date) => {
    setStartdate(date);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    console.log("Form submitted successfully");
    // Add your code to submit the form data here
  };

  return (
    <div>
      {/* <h4>Add Company</h4> */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
        <Row>
        <Form.Group as={Col} md="4" controlId="formGroupName">
          <Form.Label>Owner Name*</Form.Label>
          <Form.Control
            required
            type="text"
            value={OwnerName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter Owner name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="formGroupEmployeeId">
          <Form.Label>Company Name*</Form.Label>
          <Form.Control
            required
            type="text"
            value={CompanyName}
            onChange={(event) => setEmployeeId(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter Name.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Form.Group as={Col} md="4" controlId="formGroupType">
          <Form.Label>Status*</Form.Label>
          <Form.Select
            required
            value={Status}
            onChange={(event) => setPosition(event.target.value)}
          >
            <option value=""></option>
            <option value="Type 1">Active</option>
            <option value="Type 2">Not Active</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Select Status.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="contactNumber">
          <Form.Label>Contact Number*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your Contact Number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="formBasicEmail">
          <Form.Label>Company Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your Contact Number.
          </Form.Control.Feedback>
        </Form.Group>

       
            <Form.Group as={Col} md="3" controlId="formGroupStartdate">
              <Form.Label>Start Date*</Form.Label>
              <DatePicker
                id="date-picker-Startdate"
                selected={startdate}
                onChange={handleStartdateChange}
                dateFormat="MM/dd/yyyy"
              />
            </Form.Group>

        <br />
        <Form.Group>
          <Button as="input" type="submit" value="Submit" />{" "}
          <Button as="input" type="reset" value="Reset" />{""}
          
        </Form.Group>
      </Form>
    </div>
  );
}
export default AddNewCompany;
