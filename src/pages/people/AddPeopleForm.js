import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { FormGroup } from "react-bootstrap";

function AddPeople() {
  const [fullName, setFullName] = useState("");
  const [company, setEmployeeId] = useState("");
  const [position, setPosition] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

  };

  const isContactNumberValid = (value) => {
    // regex pattern to match phone numbers of format +X-XXX-XXX-XXXX
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return phoneRegex.test(value);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="formGroupName">
          <Form.Label>Full Name*</Form.Label>
          <Form.Control
            required
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your full name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="formGroupEmployeeId">
          <Form.Label>Company*</Form.Label>
          <Form.Control
            required
            type="text"
            value={company}
            onChange={(event) => setEmployeeId(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter Company.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        
        <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="formGroupType">
          <Form.Label>Position*</Form.Label>
          <Form.Select
            required
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          >
            <option value=""></option>
            <option value="Type 1">Owner</option>
            <option value="Type 2">Acountant</option>
            <option value="Type 2">Manager</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Select the correct position.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="contactNumber">
          <Form.Label>Contact Number*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="+X-XXX-XXX-XXXX"
            value={contactNumber}
            onChange={(event) => { setContactNumber(event.target.value);
              if(!isContactNumberValid(event.target.value)){
                    event.target.setCustomValidity("Please enter a valid phone number in the format +X-XXX-XXX-XXXX");
              }else{
                event.target.setCustomValidity("");
              }
            
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your Contact Number.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        
        <Row>
        <Form.Group as={Col} md="4"  controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter valied email.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>

        <br/>
        <Row>
        <Form.Group as={Col} md="4">
          <Button as="input" type="submit" value="Submit" />{" "}
          <Button as="input" type="reset" value="Reset" />{""}
        </Form.Group>
        </Row>
      </Form>

    </div>
  );
}

export default AddPeople;
