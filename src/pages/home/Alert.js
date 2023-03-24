import './Home.css';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert className='alert' show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
           Got It
          </Button>
        </div>
      </Alert>

      {!show && <button className='notification' onClick={()=> setShow (true)} >
      <span class="material-icons">notifications</span>
    <span className="button-badge">2</span>
   
      </button>}
    </>
  );
}

export default AlertDismissible ;