import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddNewCompany from "./AddNewCompany";

function Example1() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>+Add New Company</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Company
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddNewCompany />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example1;
