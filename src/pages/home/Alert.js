import "./Home.css";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert className="alert" show={show} variant="success">
        <Alert.Heading>Notification</Alert.Heading>
        <p>You have been assigned to a new project.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Ok
          </Button>
        </div>
      </Alert>

      {!show && (
        <button className="notification" onClick={() => setShow(true)}>
          <span class="material-icons">notifications</span>
          <span className="button-badge">2</span>
        </button>
      )}
    </>
  );
}

export default AlertDismissible;
