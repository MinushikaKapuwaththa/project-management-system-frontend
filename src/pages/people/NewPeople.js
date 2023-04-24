import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddPeopleForm from "./AddPeopleForm";

function NewPeople() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>+Add New Client</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Client Person
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddPeopleForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewPeople;
