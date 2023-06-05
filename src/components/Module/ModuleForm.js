import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModuleListItem from "./ModuleListItem";
import "./ModuleForm.css";
import { Formik, form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  moduleName: Yup.string().required("Module Name is required"),
  description: Yup.string().required('Description is required'),
  tasks: Yup.array().min(1, 'At least one task is required'),
});

export default function ModuleForm(){
  const initialValues = {
    moduleName: "",
    description: '',
    tasks: [],
  };

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={{ paddingTop: "20px" }}>
          
            <h3 className="text-center"> Creat Module</h3>
          
        </div>

        <div className="container shadow p-10 t-5 b-5 w-50 mb-3 bg-rounded text-left">
          <Form.Group  controlId="formBasicName">
            <Form.Label>ModuleName</Form.Label>
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
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
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
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTasks">
            <Form.Label>Tasks</Form.Label>
            <ModuleListItem />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Estimated time</Form.Label>
            <Form.Control type="Time" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="Date" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="Date" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Estimated End Date</Form.Label>
            <Form.Control type="Date" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
