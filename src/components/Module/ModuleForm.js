import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModuleListItem from "./ModuleListItem";
import "./ModuleForm.css";
import { Formik, form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  moduleName: Yup.string().required("Module Name is required"),
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
    description: "",
    tasks: [],
    estimatedTime: "",
    startDate: "",
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
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={{ paddingTop: "20px" }}>
          <h3 className="text-center"> Creat Module</h3>
        </div>

        <div className="container shadow p-10 t-10 b-10 w-50 mb-3 bg-light text-dark rounded ">
          <Form.Group
            className="mb-3 w-100 text-right"
            controlId="formBasicName"
          >
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

          <Form.Group className="mb-3 w-100" controlId="formBasicDescription">
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

          <div className="row">
            <div className="col">
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
            </div>

            <div className="col">
              <div className="mb-3 w-100">
                <Form.Group className="w-150" controlId="formBasicName">
                  <Form.Label>Estimated time (Hours)</Form.Label>
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
                </Form.Group>
              </div>
            </div>
          </div>

          <div className="mb-3 w-100">
            <Form.Group controlId="formBasicName">
              <Form.Label>Start Date</Form.Label>
              <Field type="date" name="startDate" className="form-control" />
              <ErrorMessage
                component="div"
                name="startDate"
                className="text-danger"
              />
            </Form.Group>
          </div>

          <div className="mb-3 w-100">
            <Form.Group controlId="formBasicName">
              <Form.Label>End Date</Form.Label>
              <Field type="date" name="endDate" className="form-control" />
              <ErrorMessage
                component="div"
                name="endDate"
                className="text-danger"
              />
            </Form.Group>
          </div>

          <div className="mb-3 w-100">
            <Form.Group controlId="formBasicName">
              <Form.Label>Estimated End Date</Form.Label>
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
            </Form.Group>
          </div>

          
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          
        </div>
      </Form>
    </Formik>
  );
}
