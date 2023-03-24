import React from 'react';
import './companies.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AddNew from './AddNew';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Customer() {

  const [statusAll, setStatusAll] = React.useState('');

  const handleChange = (event) => {
    setStatusAll(event.target.value);
  };

  return (
    <div className='people'>
      <div className='peopleglass'>
        <div className='peoCon'>

          <br/>
            <Form>
            <Row className="align-items-center justify-content-between" Col xs={10}>
              <Col md={2}>
                <AddNew/>
              </Col>

              <Col md={2}>  
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-helper-label">Status-All</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={statusAll}
                      label="status"
                      onChange={handleChange}
                    >

                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
              </Col>
              <Col md={3}>
                <Button variant="primary">+Add New Client Person</Button>
              </Col>
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