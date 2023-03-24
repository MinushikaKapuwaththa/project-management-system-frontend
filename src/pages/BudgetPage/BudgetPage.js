import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useRef,useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./BudgetPage.css";


function BudgetPage() {
  const progress1 =useRef();
  const progress2=useRef();

const [payments,setPayments]=useState([])
const[price,setprice]=useState(0)
const[Received,setReceived]=useState(0)
const[RealCost,setRealCost]=useState(0)
const[EstimatedCost,setEstimatedCost]=useState()
useEffect(()=>{
  axios
  .get('http://localhost:5148/api/Budget')
  .then (
    Response=>{

      setprice(Response.data.result[0].totalBudget)
      setReceived(Response.data.result[0].received )
      setRealCost(Response.data.result[0].actualcost)
      setEstimatedCost(Response.data.result[0].plannedcost)
  })
  .catch(
    Error=> {
      console.log(Error)
  })

  axios
  .get('http://localhost:5148/api/Payment')
  .then(
    Response=>{
        setPayments(Response.data.result);
    })
    .catch(
      Error=> {
        console.log(Error)
    })
},[])

useEffect(() => {
  if (progress1.current) {
    const inner = progress1.current.querySelector(".progress-bar");
    if ( inner ) {
     inner.style.backgroundColor = "#621212";
    }
  }
 if (progress2.current){
  const inner = progress2.current.querySelector(".progress-bar");
  if ( inner ) {
   inner.style.backgroundColor = "#15AD2D";
  }
 }
  

}, [progress1],[progress2]);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p style={{ margin:"1.2rem" }}>Projects  /  Hospital Management Project(P00232)  / Budget</p>
      <div style={{display:"flex",justifyContent:"space-between" ,alignItems:"baseline"}} >
        <p style={{fontSize:"20px",font:"inter",fontWeight:600, margin:"1.2rem"}}>Budget</p>
        <Link to="/BudgetDetailForm">
        <Button variant="primary" style={{margin:"10px",backgroundColor:"#305995" ,width:"fit-content"}}>+Add Details</Button>
        </Link>
      </div>
      <InputGroup className="progress-group"style={{justifyContent:"space-between" }} >
        <Col className="id-input" sm={8} >
          <div class="p-2 ">
            <ProgressBar className="progress1" ref={progress1} style={{backgroundColor:"#848484",width: "180%"}} now={4} />
          </div>
          <div class="p-2 ">
          <ProgressBar className="progress2" ref={progress2} style={{backgroundColor:"#15AD2D",width: "180%" }} now={4} />  
          
          </div>
        </Col>
        <Col className="card-input" sm={4}>
          <Card style={{ width: "16rem",margin:"10px"}}>
            <Card.Body>
                <div>
                  <ul>
                    <li><div className="rectrangel-1" ></div><p className="text-1">Price</p></li>
                    <li> <div className="rectrangel-2" > </div><p  className="text-2">Received Payments</p></li>
                    <li> <div className="rectrangel-3" > </div><p  className="text-3"></p>Actual Cost</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
        </Col>
      </InputGroup>
      <InputGroup className="input-group" style={{width:"105%",padding:"0.2rem"}} >
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "195px" ,height: "114px"}}>
           <Card.Body>
              <Card.Title>Price</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {price} LKR
              </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "195px" ,height: "114px" }}>
            <Card.Body>
              <Card.Title>Received Price</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {Received} LKR
              </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "195px" ,height: "114px" }}>
            <Card.Body>
              <Card.Title>Real Cost</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {RealCost} LKR 
              </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "195px" ,height: "114px"}}>
            <Card.Body>
              <Card.Title>Estimated Cost</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {EstimatedCost} LKR
              </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
        <Link to="/RecordDetail"> 
        <Button variant="primary" style={{margin:"10px",backgroundColor:"#305995" ,width:"fit-content"}}>+Add Record</Button>
        </Link>
        </Col>
         
      </InputGroup>
      
      <div class="p-2 ">
      <Table style={{borderRadius:'12px',overflow: 'hidden',margin:"1.2rem"}}striped bordered hover>
      <thead >
        <tr style={{backgroundColor:" #05214B" }}>
          <th style={{color:"white"}}>Date</th>
          <th style={{color:"white"}}>Paid Person</th>
          <th style={{color:"white"}}>Amount(LKR)</th>
        </tr>
      </thead>
      <tbody>
        {payments.map(payment=>
        <tr>
          <td>{payment.created.split("T")[0]}</td>
          <td>{payment.paidby}</td>
          <td>{payment.amount}</td>
        </tr>
         )}
        </tbody>
    </Table>
    </div>
    </div>
  );
}

export default BudgetPage;
