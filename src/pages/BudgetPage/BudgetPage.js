import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import { useRef,useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route,useRouteMatch } from "react-router-dom";
import BudgetDetailForm from "../BudgetDetailForm/BudgetDetailForm";
import RecordDetail from "../RecordDetail/RecordDetail";
import "./BudgetPage.css";
import SideBar from "../project/SideBar";
import Loading from "../../common/Loading/Loading";

import DataTable from 'react-data-table-component'

function BudgetPage() {
  const [lgShow, setLgShow] = useState(false)
  const { path } = useRouteMatch();
  const progress1 =useRef();
  const progress2=useRef();
  const {projectId,name }=useParams();

const [payments,setPayments]=useState([])
const[price,setprice]=useState(0)
const[Received,setReceived]=useState(0)
const[RealCost,setRealCost]=useState(0)
const[EstimatedCost,setEstimatedCost]=useState();
const [role,setRole]=useState("admin");
const [loading ,setLoading]=useState(false);

const columns = [
  {
      name: 'Created',
      selector: row => row.created.split("T")[0],
  },
  {
      name: 'Paid Person',
      selector: row => row.paidby,
  },
  {
    name: 'Amount(LKR)',
    selector: row => row.amount,
},
{
  name: 'Attachment',
  selector: row => row.attachment,
  cell: (row, index) => (<Button variant="light" onClick={()=>{
    const byteCharacters = atob(row.attachment.substr(`data:application/pdf;base64,`.length));
    const byteArrays = [];
    
    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);
    
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
    
        const byteArray = new Uint8Array(byteNumbers);
    
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {type: "application/pdf"});
    const blobUrl = URL.createObjectURL(blob);
    
    window.open(blobUrl, '_blank');
  }}>open</Button>)

},
];

const tableCustomStyles = {
  headCells: {
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      backgroundColor: 'rgb(5, 33, 75)',
      color:"white"
    },
  },
  rows: {
        style: {
          justifyContent: 'center',
            backgroundColor: '#D3D3D3'
        },
    },
}
useEffect(()=>{
  setLoading(true);
  axios
  .get(`http://localhost:5148/api/Budget/ProjectId/${projectId}`)
  .then ( 
    Response=>{
      console.log(Response.data)
      setprice(Response.data.result.totalBudget)
      setReceived(Response.data.result.received )
      setRealCost(Response.data.result.actualcost)
      setEstimatedCost(Response.data.result.plannedcost)
  })
  .catch(
    Error=> {
      console.log(Error)
  })

  axios
  .get(`http://localhost:5148/api/Payment/ProjectId/${projectId}`)
  .then(
    Response=>{
        setPayments(Response.data.result);
        setTimeout(() => {
          setLoading(false)
        }, 1000);
    })
    .catch(
      Error=> {
        console.log(Error)
        setTimeout(() => {
          setLoading(false)
        }, 1000);
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
    <>
    {loading?(<Loading/>):(<><SideBar />
    <Switch>
       <Route exact path={path}>
       <div className="App">
    
    <Link to={"/project"}>Projects</Link><Link to={`/project/${name}/${projectId}`}>/{name}({projectId})</Link><Link to={`/project/${name}/${projectId}/budget`}>/Budget</Link>
    <div style={{display:"flex",justifyContent:"space-between" ,alignItems:"baseline"}} >
      <p style={{fontSize:"20px",font:"inter",fontWeight:600, margin:"1.2rem"}}>Budget</p>
      {
        role=="admin"?(<Link to={`/project/${name}/${projectId}/budget/BudgetDetailForm`}>

        <Button variant="primary" onClick={() => setLgShow(true)} style={{margin:"10px",backgroundColor:"#305995" ,width:"fit-content"}}>+Add Details</Button>
        </Link>):null
      }
    </div>
    <InputGroup className="progress-group"style={{justifyContent:"space-between" }} >
      <Col className="projectId-input" sm={8} >
        <div class="p-2 ">
          <ProgressBar className="progress1" ref={progress1} style={{backgroundColor:"#848484",width: "80%"}} now={((Received/price)*100)} />
        </div>
        <div class="p-2 ">
        <ProgressBar className="progress2" ref={progress2} style={{backgroundColor:"#848484",width: "80%" }} now={((RealCost/price)*100)} />  
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
      <Link to={`/project/${name}/${projectId}/budget/RecordDetail`}> 
      <Button variant="primary" style={{margin:"10px",backgroundColor:"#305995" ,width:"fit-content"}}>+Add Record</Button>
      </Link>
      </Col>
       
    </InputGroup>
    
    <div class="p-2 table">
    <DataTable
    style={{borderRadius:"10px"}}
            columns={columns}
            data={payments}
            pagination={true}
            progressPending={loading}
            progressComponent={<><Loading/></>}
            customStyles={tableCustomStyles}
        />
    
  </div>
  </div>

    </Route>         
      <Route path={`${path}/RecordDetail`} component={RecordDetail}/>
      <Route path={`${path}/BudgetDetailForm`} component={BudgetDetailForm}/>
    </Switch></>)}
    
    </>
    
    
  );
}

export default BudgetPage;
