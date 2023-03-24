import React from 'react';
import './project.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AddRequest from './AddRequst';






export default function Projects() {
  return(
  <div className='project'>
    <div className='projectglass'>
      <div className='proCont'>
    <h5> Projects </h5>
   
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

        <Form.Group as={Col} controlId="formGridState">
          <Form.Select defaultValue="Status All">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        
        <div className='createproject'>
        <AddRequest/>
        
        </div>
        
      </Row>
    </Form>
   
   <br/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Lead</th> 
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td> Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
          
        </tr>
        
      </tbody>
    </Table>
    </div>
    </div>
    
  </div>
  );
   
}

