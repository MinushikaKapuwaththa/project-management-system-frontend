import React from 'react';
import './Home.css';
import Table from 'react-bootstrap/Table';
import AlertDismissible from './Alert';




export default function Home() {

    return(

      <div className='Home'>
        <div className='Homeglass'>
          <div className='table'>
        <br/>
        <h5>Assigned Task</h5>
        <br/>
        
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Project</th>
          <th>Task</th>
          <th>Employees</th>
          <th>Deadline</th>
          <th>Days Left</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td> Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    </div>
    
     <AlertDismissible/>
      
    
</div>

    ) ;

  }
  