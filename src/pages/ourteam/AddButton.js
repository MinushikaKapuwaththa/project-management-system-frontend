import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Add_Employee from './Add_Employee';

function Example1() {
 
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      
      <Button onClick={() => setLgShow(true)}>+Add New Member</Button>
     
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Add Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Add_Employee/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example1;