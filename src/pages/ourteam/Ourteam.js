import React from 'react';
import './ourteam.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Add_Employee from './Add_Employee';
import Example1 from './AddButton';
import Team from './Team';




export default function Customer() {
  return (
    
    <div className="ourteam">
    <div className='ourteamglass'>
      <div className='ourCon'>
    <br/>
    <Form>
    <Row className="mb-1" Col xs={5}>

         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>       

        <Form.Group as={Col} controlId="formGridState">
          <Form.Select defaultValue="All Types">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <div className='addmember'>
        <Example1/>
        </div>
       
        
      </Row>
    </Form>
     
    </div>
    <Team/>
</div>
</div>

  );

}