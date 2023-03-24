import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';

export default function () {
  const [fullName, setFullName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    console.log('Form submitted successfully');
    // Add your code to submit the form data here
  };

  return (
    <div>
      <h4>Create project</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="4" controlId="formGroupName">
          <Form.Label>Full Name*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your full name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="formGroupEmployeeId">
          <Form.Label>Employee ID*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(event) => setEmployeeId(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your employee ID.
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="formGroupUserName">
            <Form.Label>User name*</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="User name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your username.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formGroupPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group as={Col} md="3" controlId="formGroupType">
          <Form.Label>Position*</Form.Label>
          <Form.Select
            required
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          >
            <option value="">Select Position</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>

          </Form.Select>
          <Form.Control.Feedback type="invalid">
              Select your position.
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
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            /><Form.Control.Feedback type="invalid">
              Please enter your Contact Number.
            </Form.Control.Feedback> 
        
        </Form.Group>

      <Form.Group as={Col} md="4"  controlId='formGroupAddress'>
            <Form.Label>Address</Form.Label>
            <Form.Control
               required
               as='textarea'
               rows={3}
               value={address}
               type='textarea'
               style={{ height: '75px', width:'400px' }}
               onChange={(event) => setAddress(event.target.value)}
            ></Form.Control> 
            <Form.Control.Feedback type="invalid">
              Please enter your Contact Number.
            </Form.Control.Feedback> 
      </Form.Group>  

      <br/>
      <Form.Group> 
        <Button as="input" type="submit" value="Submit" />{' '}
        <Button as="input" type="reset" value="Reset" />{''}  
      </Form.Group>  


    </Form>  
     

    </div>
  );
}
