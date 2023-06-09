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


function RecordDetail() {
  const { path } = useRouteMatch();
  const {projectId}=useParams();
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
    axios
    .get(`http://localhost:5148/api/Project/${projectId}`)
    .then (
      Response=>{
        setValues(values => ({ ...values, "projectId":Response.data.result.id,"projectName":Response.data.result.name }))
    })
    .catch(
      Error=> {
        console.log(Error)
    })
  },[])

  const submit = () => {
    
    axios
    .post('http://localhost:5148/api/Payment',
    {
      Paidby:values.clientId,
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
            items: [
              {
                  sno: 1,
                  desc: values.projectName,
                  amount:Response.data.result.amount
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
    <Switch>
      <Route exact path={path}>
      <div className="App">
      <Form onSubmit={handleSubmit}>
      <Form.Group
          className="project-input"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>project Name</Form.Label>
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
        <Form.Group className="projectid-input">
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
      <Form.Group className="clientId-input">
        <Form.Label>Client ID  </Form.Label>
          <Form.Control 
           type="text"
           name="clientId"
           onChange={handleChange}
           value={values.clientId|| ""}
           aria-label="Amount (to the nearest Rupeels)" />  
        {errors.clientId && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.clientId}
              </p>
            )}
        </Form.Group>       
        <Form.Group className="amount-input">
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
      <Form.Group className="date-input">
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
        <Form.Group className="record-input">
          <Form.Label>Recorded By</Form.Label>
          <Form.Control 
            type="text"
            name="record"
            onChange={handleChange}
            value={values.record || ""}/>
        </Form.Group>
        {errors.record && (
              <p className="help danger" style={{ color: "red" }}>
                {errors.record}
              </p>
            )}
        <Form.Group  style={{width:"20%",padding: "10px" }}  controlId="formFile" className="mb-3">
         <Form.Label style={{ width:"20%",padding: "10px" }}>attachment</Form.Label>
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
      <Button className="me-3 float-end"style={{ width: "190px", height: "50px", margin: "10px"  }}type="submit"> Add </Button>
     <Button  className="me-3 float-end" style={{ width: "100px", height: "50px", margin: "10px" }} type="reset">Cancel</Button>               
      </Form>
       </div>
      </Route>
      <Route path={`${path}/invoice`}>
        <Invoice invoiceData={invoiceData}/>
      </Route>
    </Switch>
    
  );
}
export default RecordDetail;
