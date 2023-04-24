import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputGroup from 'react-bootstrap/InputGroup'

export default function Create() {
  const [startdate, setStartdate] = useState(new Date());
  const [estimatedEndDate, setEstimatedEndDate] = useState(new Date());

  const handleStartdateChange = (date) => {
    setStartdate(date);
  };
  
  const handleEstimatedEndDateChange = (date) => {
    setEstimatedEndDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    
     <Form onSubmit={handleSubmit}>
      
       <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Project Name*</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Control.Feedback type="invalid">
            Please provide a Project Name.
          </Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Key*</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Control.Feedback type="invalid">
            Please provide a Key value.
          </Form.Control.Feedback>
        </Form.Group>
       

      <Row className="mb-3">

        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>Client Name*</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Control.Feedback type="invalid">
            Please provide a Name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId='validationCustom04'>
             <Form.Label>Reported By*</Form.Label>
                <Form.Select placeholder=''>
                      <option></option> 
                      <option value ='1'>Bimal Perera</option>
                      <option value='2'>Nadun Wijethunga</option>
                </Form.Select> 
                <Form.Control.Feedback type="invalid">
                    Please provide a Name.
                </Form.Control.Feedback>   
        </Form.Group> 
        
        </Row>

        <Form.Group className="md-3"  controlId='validationCustom05'>
            <Form.Label>Disription</Form.Label>
            <Form.Control
               as='textarea'
               rows={3}
               type='textarea'
               style={{ height: '75px', width:'420px' }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
                    Please provide a Name.
                </Form.Control.Feedback>   
        </Form.Group>

        <Form.Group as={Col} md="5" controlId='validationCustom04'>
             <Form.Label>Type*</Form.Label>
                <Form.Select placeholder=''>
                      <option></option>
                      <option value ='1'>Type 1</option>
                      <option value='2'>Type 2</option>
                </Form.Select>    
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="validationCustomUsername">
          <Form.Label>Estimated Time</Form.Label>
          <InputGroup>
            <Form.Select 
             
              placeholder="Select estimated time" 
              min={null} 
              max={500}
            >
              {[...Array(501).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Form.Select>

            <InputGroup.Text id="basic-addon2">Hours</InputGroup.Text>
          </InputGroup>
        </Form.Group>


          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="formGroupStartdate">
              <Form.Label>Start Date*</Form.Label>
              <DatePicker
                id="date-picker-Startdate"
                selected={startdate}
                onChange={handleStartdateChange}
                dateFormat="MM/dd/yyyy"
              />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="formGroupEstimatedEndDate">
              <Form.Label>Estimated End Date*</Form.Label>
              <DatePicker
                id="date-picker-Estimated-End-Date"
                selected={estimatedEndDate}
                onChange={handleEstimatedEndDateChange}
                dateFormat="MM/dd/yyyy"
              />
            </Form.Group>
          </Row>
          
        <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
          <Form.Label>Estimated Budget</Form.Label>
          <InputGroup>
            <Form.Select 
             
              placeholder="Select estimated time" 
              min={null} 
              max={500}
            >
              {[...Array(501).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Form.Select>

            <InputGroup.Text id="basic-addon2">Lkr</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
          <Form.Label>Hourly Rate</Form.Label>
          <InputGroup>
            <Form.Select 
             
              placeholder="Select estimated time" 
              min={null} 
              max={500}
            >
              {[...Array(501).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Form.Select>

            <InputGroup.Text id="basic-addon2">Lkr</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        </Row> 

          <Form.Group as={Col} md="6" controlId="formGroupLead">
                <Form.Label>Lead*</Form.Label>
                <Form.Control type="text" placeholder=""/>
                <Form.Control.Feedback type="invalid">
                    Please provide a Name.
                </Form.Control.Feedback> 
          </Form.Group>
      
          <br/>
          <Form.Group className="mb-3">
              <Button type="submit">Submit form</Button>{' '}
              <Button as="input" type="reset" value="Reset" /> 
          </Form.Group>

    

    </Form>    
 
     

);

}