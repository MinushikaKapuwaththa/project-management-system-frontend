import React from "react";
import ModuleListItem from "./ModuleListItem";
import "./ModuleForm.css";
import { Formik, Form, Field, ErrorMessage,FieldArray } from 'formik';
import * as Yup from "yup";
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import axios from "axios";

const validationSchema = Yup.object().shape({
  moduleName: Yup.string().required("Module Name is required"),
  moduleID:Yup.string().required("Module ID is required"),
  description: Yup.string().required("Description is required"),
  tasks: Yup.array().min(1, "At least one task is required"),
  estimatedTime: Yup.string().required("Estimated time is required"),
  startDate: Yup.date().required("Start Date is required"),
  endDate: Yup.date().required("End Date is required"),
  estimatedEndDate: Yup.date().required("Estimated End Date is required"),
});

export default function ModuleForm() {
  const initialValues = {
    moduleName: "",
    ModuleId:"",
    description: "",
    tasks: [],
    estimatedTime: "",
    startDate: "",
    endDate: "",
    estimatedEndDate: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    //console.log(values);
    axios
    .post('http://localhost:5148/api/Module',
    { 
      Name:values.moduleName,
      Id:values.moduleId,
      Description:values.description,
      Tasks:values.tasks,
      EstimatedTime:values.estimatedTime,
      StartDate:values.startDate,
      EndDate:values.endDate,
      EstimatedEndDate:values.estimatedEndDate
      
     })
    .then (
      Response=>{ 
        console.log(Response)
    })
    .catch(
      Error=> {
        console.log(Error)
       })
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting,values  }) => (
      <Form>
        <div style={{ paddingTop: "20px" }}>
          <h3 className="text-center"> Creat Module</h3>
        </div>

        <div className="container shadow p-10 t-10 b-10 w-50 mb-3 bg-light text-dark rounded ">
          <FormGroup
            className="mb-3 w-100 text-right"
            controlId="formBasicName"
          >
            <FormLabel>ModuleName</FormLabel>
            <Field
              type="text"
              name="moduleName"
              placeholder="Enter Module Name"
              className="form-control"
            />
            <ErrorMessage
              component="div"
              name="moduleName"
              className="text-danger"
            />
          </FormGroup>

          <FormGroup
            className="mb-3 w-100 text-right"
            controlId="formBasicName"
          >
            <FormLabel>ModuleID</FormLabel>
            <Field
              type="text"
              name="moduleId"
              placeholder="Enter Module ID"
              className="form-control"
            />
            <ErrorMessage
              component="div"
              name="moduleId"
              className="text-danger"
            />
          </FormGroup>

          <FormGroup className="mb-3 w-100" controlId="formBasicDescription">
            <FormLabel>Description</FormLabel>
            <Field
              as="textarea"
              name="description"
              className="form-control"
              rows="5"
            />
            <ErrorMessage
              component="div"
              name="description"
              className="text-danger"
            />
          </FormGroup>

          <div className="row">
            <div className="col">
              <FormGroup className="mb-3" controlId="formBasicTasks">
                <FormLabel>Tasks</FormLabel>
                <FieldArray
             name="tasks"
             render={arrayHelpers => (
               <div>
                 {values.tasks && values.tasks.length > 0 ? (
                   values.tasks.map((tasks, index) => (
                     <div key={index}>
                       <Field name={`tasks.${index}`} />
                       <Button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                         -
                       </Button>
                       <Button
                         type="button"
                         onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                       >
                         +
                       </Button>
                     </div>
                   ))
                 ) : (
                   <Button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all friends from the list */}
                     Add a tasks
                   </Button>
                 )}
               </div>
             )}
           />
                <ErrorMessage
                  component="div"
                  name="tasks"
                  className="text-danger"
                />
              </FormGroup>
            </div>

            <div className="col">
              <div className="mb-3 w-100">
                <FormGroup className="w-150" controlId="formBasicName">
                  <FormLabel>Estimated time (Hours)</FormLabel>
                  <Field
                    type="text"
                    name="estimatedTime"
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="estimatedTime"
                    className="text-danger"
                  />
                </FormGroup>
              </div>
            </div>
          </div>

          <div className="mb-3 w-100">
            <FormGroup controlId="formBasicName">
              <FormLabel>Start Date</FormLabel>
              <Field type="date" name="startDate" className="form-control" />
              <ErrorMessage
                component="div"
                name="startDate"
                className="text-danger"
              />
            </FormGroup>
          </div>

          <div className="mb-3 w-100">
            <FormGroup controlId="formBasicName">
              <FormLabel>End Date</FormLabel>
              <Field type="date" name="endDate" className="form-control" />
              <ErrorMessage
                component="div"
                name="endDate"
                className="text-danger"
              />
            </FormGroup>
          </div>

          <div className="mb-3 w-100">
            <FormGroup controlId="formBasicName">
              <FormLabel>Estimated End Date</FormLabel>
              <Field
                type="date"
                name="estimatedEndDate"
                className="form-control"
              />
              <ErrorMessage
                component="div"
                name="estimatedEndDate"
                className="text-danger"
              />
            </FormGroup>
          </div>

          
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Submit
            </button>
          
        </div>
      </Form>)}
    </Formik>
  );
}
