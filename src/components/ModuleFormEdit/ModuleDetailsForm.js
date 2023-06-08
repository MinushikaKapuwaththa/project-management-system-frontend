import React from "react";

import Form from "react-bootstrap/Form";
import ModuleListItem from "../Module/ModuleListItem";
import { Formik, form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    
  description: Yup.string().required("Description is required"),
  tasks: Yup.array().min(1, "At least one task is required"),
  estimatedTime: Yup.string().required("Estimated time is required"),
  endDate: Yup.date().required("End Date is required"),
  estimatedEndDate: Yup.date().required("Estimated End Date is required"),
});


export default function ModuleDetailsForm() {
  
  const initialValues = {
    
    description: "",
    tasks: [],
    estimatedTime: "",
    endDate: "",
    estimatedEndDate: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>



    <Form>
      <div style={{ paddingTop: "20px" }}>
        <center>
          <h2 className="Header1">Edit Module</h2>
        </center>
      </div>
      <div className="container shadow p-10 t=5 b-5 w-50 mb-3 bg-light text-dark rounded">
        <Form.Group className="mb-3 w-100 " controlId="formBasicName" >
          <Form.Label>ModuleName</Form.Label>
          <Form.Control type="text" placeholder="Enter  Module Name"  />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-100" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Field
              as="textarea"
              name="description"
              className="form-control "
              rows="5"
            />
            <ErrorMessage
              component="div"
              name="description"
              className="text-danger"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTasks">
                <Form.Label>Tasks</Form.Label>
                <ModuleListItem />
                {/* Include your logic for rendering tasks here */}
                <ErrorMessage
                  component="div"
                  name="tasks"
                  className="text-danger"
                />
              </Form.Group>
          

            <Form.Group className="w-150" controlId="formBasicName">
                  <Form.Label>Estimated time (Hours)</Form.Label>
                  <Field
                    type="text"
                    name="estimatedTime"
                    className="form-control "
                  />
                  <ErrorMessage
                    component="div"
                    name="estimatedTime"
                    className="text-danger"
                  />
                </Form.Group>

        
        <Form.Group className="mb-3 w-100" controlId="formBasicName">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date"  />
          <Form.Text className="text-muted "></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicName">
              <Form.Label>End Date</Form.Label>
              <Field type="date" name="endDate" className="form-control " />
              <ErrorMessage
                component="div"
                name="endDate"
                className="text-danger"
              />
            </Form.Group>

        
            <Form.Group className="mb-3 w-100" controlId="formBasicName">
              <Form.Label>Estimated End Date</Form.Label>
              <Field
                type="date"
                name="estimatedEndDate"
                className="form-control "
              />
              <ErrorMessage
                component="div"
                name="estimatedEndDate"
                className="text-danger"
              />
            </Form.Group>
            

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
          

        
      
    </Form>
    </Formik>
    
    
    
  );
}
