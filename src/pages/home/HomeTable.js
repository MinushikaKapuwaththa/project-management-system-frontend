import React from 'react'
import Table from 'react-bootstrap/Table';

export default function HomeTable() {
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Project</th>
          <th>Task</th>
          <th>Employees</th>
          <th>Dedline</th>
          <th>DaysLeft</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
       
      </tbody>
    </Table>

   </div>
  );
}
