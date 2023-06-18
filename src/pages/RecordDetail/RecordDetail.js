import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import RecordUseform from "./Components/RecordUseform";
import validate from "./Components/RecordDetailValidationRules";
import axios from 'axios';
import { useEffect } from "react";
import "./RecordDetail.css";
import { useParams } from "react-router-dom";
import { Switch, Route,useRouteMatch } from "react-router-dom";
import Invoice from "../Invoice/Invoice";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import Loading from "../../common/Loading/Loading";


function RecordDetail() {
  const { path } = useRouteMatch();
  const {projectId}=useParams();
  const [loading ,setLoading]=useState(false);
  const [clientId,setClientId]=useState("");
  const history = useHistory();
  const [issueInvoice,setIssueInvoice]=useState(false);
  const [invoiceData,setInvoiceData]=useState({
    id: "5df3180a09ea16dc4b95f910",
    invoice_no: "hhhhhh",
    balance: "$2,283.74",
    title:"deufe",
    trans_date: "26-11-2023",
    address: "Lanka Safety Equipment, \n No 23A,\n Pagoda Road,\n Nugegoda,\nSri Lanka\n\n",
    client:"Client: Lanka Safety Equipment\n\n",
    projectName:"Invoice for Website Development & Hosting",
    due_date: "26-11-2021",
    companyID: "10001",
    companyName: "xyz company",
  
    items: [
        {
            sno: 1,
            desc: "Website Development Cost",
            amount:1000
        }
    ]
})
 
  useEffect(()=>{
    setLoading(true)
    axios
    .get(`http://localhost:5148/api/Project/${projectId}`)
    .then (
      Response=>{
        setClientId(Response.data.result.cliendId)
        setValues(values => ({ ...values, "projectId":Response.data.result.id, "projectName":Response.data.result.name,
 }))
    })
    .catch(
      Error=> {
        console.log(Error)
    })

    axios
    .get(`http://localhost:5148/api/Budget/ProjectId/${projectId}`)
    .then (
      Response=>{
        setValues(values => ({ ...values, "cost":Response.data.result.totalBudget,"yetToReceive":Response.data.result.yetToReceive }))
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

  useEffect(()=>{
    clientId&&axios
    .get(`http://localhost:5148/api/ClientCompany/Id/${clientId}`)
    .then (
      Response=>{
        setValues(values => ({ ...values, "address":Response.data.result.CompanyAddress,"client":Response.data.result.CompanyName }))
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  },[clientId])
  const submit = () => {
    
    axios
    .post('http://localhost:5148/api/Payment',
    {
      Paidby:clientId.toString(),
      amount:values.Amount,
      attachment:values.attachment,
      PaymentType:"cash",
      projectId:values.projectId
    }
    ).then (
      Response=>{
        console.log(Response)
        setInvoiceData(
          invoiceData => 
          ({ ...invoiceData, 
            "invoice_no":Response.data.result.id,
            "trans_date":Response.data.result.created,
            "client":Response.data.result.paydby,
            "projectName":values.projectName,
            "address" :values.address,
          items: [
              {
                  sno: 1,
                  desc: values.projectName +" cost",
                  amount:values.cost
              },
              {
                sno: "",
                desc: "Total cost",
                amount:values.cost
            },{
              sno: "",
              desc: `Yet to be Received`,
              amount:values.yetToReceive
          },
            {
              sno: "",
              desc: `Payment Received (${Response.data.result.created}) ${Response.data.result.id}`,
              amount:values.Amount
          },{
            sno: "",
            desc: `Due Amount`,
            amount:(values.yetToReceive-values.Amount)
        }
            ]

           }))
        setIssueInvoice(true);
        
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  };

  useEffect(()=>{
    issueInvoice&&history.push(`${path}/invoice`)
  },[invoiceData])
 
  const  { values,setValues, handleChange, handleSubmit, errors } = RecordUseform(
    submit,
    validate  
  );


  return (
    <>{loading?(<Loading/>):(<Switch>
      <Route exact path={path}>
      <div className="App">
      <Form onSubmit={handleSubmit}>
      <div style={{ paddingTop: "20px" }}>
          <h3 className="text-center"> Create Payment</h3>
        </div>

      <div className="container shadow p-10 t-10 b-10 w-50 mb-3 bg-light text-dark rounded ">
      <div className="row">
     <div className="col">
      <Form.Group
          className="project-input,mb-3 w-75 text-left"
          controlId="exampleForm.ControlInput1"
        > 
          <Form.Label >Project Name</Form.Label>
          <Form.Control
            type="text"
            name="projectName"
            onChange={handleChange}
            value={values.projectName || ""}
            readOnly={true}
          />
          {errors.projectName && (
            <p className="help danger" style={{ color: "red" }}>
              {errors.projectName}
            </p>
          )}
        </Form.Group>
        </div>
        <div className="col">
        <Form.Group className="projectid-input,mb-3 w-75 text-left">
        <Form.Label>Project ID </Form.Label>
        <Form.Control
            type="text"
            name="projectId"
            onChange={handleChange}
            value={values.projectId || ""}
            readOnly={true}
          /> 
            {errors.projectId && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.projectId}
              </p>
            )}
        </Form.Group>
        </div>
        </div>
      <Form.Group className="clientId-input,mb-3 w-50 text-left"style={{margin:"20px 0 " }}>
        <Form.Label>Client ID  </Form.Label>
          <Form.Control 
           type="text"
           name="clientId"
           onChange={handleChange}
           value={clientId|| ""}
           readOnly={true}
           aria-label="Amount (to the nearest Rupeels)" />  
        {errors.clientId && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.clientId}
              </p>
            )}
        </Form.Group>       
        <Form.Group className="amount-input,mb-3 w-50 text-left">
        <Form.Label>Amount </Form.Label>
        <InputGroup controlId="exampleForm.ControlInput1">
          <Form.Control 
           type="text"
           name="Amount"
           onChange={handleChange}
           value={values.Amount|| ""}
           aria-label="Amount (to the nearest Rupeels)" />
          <InputGroup.Text>LKR</InputGroup.Text>     
        </InputGroup>
        {errors.Amount && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.Amount}
              </p>
            )}
    </Form.Group>
      <Form.Group className="date-input,mb-3 w-50 text-left"style={{margin:"20px 0 " }}>
        <Form.Label>Date</Form.Label>
         <Form.Group controlId="dob">
          <Form.Control  
           type="date"
           name="date"
           onChange={handleChange}
          value={values.date || ""}
                  />
           {errors.date && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.date}
              </p>
            )}
         </Form.Group>
     </Form.Group>
        <Form.Group className="record-input,mb-3 w-50 text-left"style={{margin:"20px 0 " }}>
          <Form.Label>Recorded By</Form.Label>
          <Form.Control 
            type="text"
            name="record"
            onChange={handleChange}
            value={values.record || ""}/>
       
        {errors.record && (
              <p className="help danger" style={{ color: "red"}}>
                {errors.record}
              </p>
            )}
             </Form.Group>
             
        <Form.Group  style={{width:"20%",padding: "1px" }}  controlId="formFile" className="mb-3 w-50 text-left">
         <Form.Label style={{ width:"20%",padding: "1px" }}>attachment</Form.Label>
          <Form.Control 
              type="file"
              accept=".pdf"
              name="attachment"
              onChange={handleChange}
             /> 
                {errors.attachment && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.attachment}
              </p>
            )} 
      </Form.Group>
      <div className="ma"style={{ bottom: "0px", right: "10px"}}>
      <Button className="btn btn-primary"style={{ width: "150px", height: "50px", margin: "10px"}}type="submit"> Add </Button>
     <Button  className="btn btn-primary" style={{ width: "100px", height: "50px", margin: "10px" }} type="reset">Cancel</Button>    
       </div>       
     </div>
      </Form>
       </div>
      </Route>
      <Route path={`${path}/invoice`}>
        <Invoice invoiceData={invoiceData}/>
        </Route>
    </Switch>)}</>
  );
}
export default RecordDetail;
