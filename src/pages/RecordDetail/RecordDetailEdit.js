import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import RecordUseform from "./Components/RecordUseform";
import validate from "./Components/RecordDetailValidationRules";
import axios from "axios";
import { useEffect } from "react";
import "./RecordDetail.css";
import { useParams } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Invoice from "../Invoice/Invoice";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../common/Loading/Loading";

function RecordDetailEdit() {
  const { path } = useRouteMatch();
  const { projectId, id, name } = useParams();
  const [loading, setLoading] = useState(false);
  const [clientId, setClientId] = useState("");
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5148/api/Project/${projectId}`)
      .then((Response) => {
        setClientId(Response.data.result.cliendId);
        setValues((values) => ({
          ...values,
          projectId: Response.data.result.id,
          projectName: Response.data.result.name,
        }));
      })
      .catch((Error) => {
        console.log(Error);
      });

    axios
      .get(`http://localhost:5148/api/Budget/ProjectId/${projectId}`)
      .then((Response) => {
        console.log(Response.data);
        setValues((values) => ({
          ...values,
          cost: Response.data.result.totalBudget,
          yetToReceive: Response.data.result.yetToReceive,
        }));
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((Error) => {
        console.log(Error);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });

    axios
      .get(`http://localhost:5148/api/Payment/Id/${id}`)
      .then((Response) => {
        setValues((values) => ({
          ...values,
          Amount: Response.data.result.amount,
          attachment: Response.data.result.attachment,
          date: Response.data.result.created.split("T")[0],
        }));
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((Error) => {
        console.log(Error);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  useEffect(() => {
    clientId &&
      axios
        .get(`http://localhost:5148/api/ClientCompany/Id/${clientId}`)
        .then((Response) => {
          setValues((values) => ({
            ...values,
            address: Response.data.result.CompanyAddress,
            client: Response.data.result.CompanyName,
          }));
        })
        .catch((Error) => {
          console.log(Error);
        });
  }, [clientId]);

  const submit = () => {
    setLoading(true);
    console.log(values);
    axios
      .put("http://localhost:5148/api/Payment/update", {
        id: id,
        projectId: values.projectId,
        paidby: clientId.toString(),
        paymentType: "cash",
        amount: values.Amount,
        attachment: values.attachment,
      })
      .then((Response) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Payment Successfully Edited!",
        });
        setLoading(false);
        history.push(`/project/${name}/${projectId}/budget`);
      })
      .catch((Error) => {
        console.log(Error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setLoading(false);
      });
  };

  const { values, setValues, handleChange, handleSubmit, errors } =
    RecordUseform(submit, validate);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path={path}>
            <div className="App">
              <Form onSubmit={handleSubmit}>
                <div style={{ paddingTop: "20px" }}>
                  <h3 className="text-center"> Update Payment</h3>
                </div>

                <div className="container shadow p-10 t-10 b-10 w-50 mb-3 bg-light text-dark rounded ">
                  <div className="row">
                    <div className="col">
                      <Form.Group
                        className="project-input,mb-3 w-75 text-left"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Project Name</Form.Label>
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
                  <Form.Group
                    className="clientId-input,mb-3 w-50 text-left"
                    style={{ margin: "20px 0 " }}
                  >
                    <Form.Label>Client ID </Form.Label>
                    <Form.Control
                      type="text"
                      name="clientId"
                      onChange={handleChange}
                      value={clientId || ""}
                      readOnly={true}
                      aria-label="Amount (to the nearest Rupeels)"
                    />
                    {errors.clientId && (
                      <p className="help danger" style={{ color: "red" }}>
                        {errors.clientId}
                      </p>
                    )}
                  </Form.Group>
                  <Form.Group className="amount-input,mb-3 w-50 text-left">
                    <Form.Label>
                      Amount <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <InputGroup controlId="exampleForm.ControlInput1">
                      <Form.Control
                        type="text"
                        name="Amount"
                        onChange={handleChange}
                        value={values.Amount || ""}
                        aria-label="Amount (to the nearest Rupeels)"
                      />
                      <InputGroup.Text>LKR</InputGroup.Text>
                    </InputGroup>
                    {errors.Amount && (
                      <p className="help danger" style={{ color: "red" }}>
                        {errors.Amount}
                      </p>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="date-input,mb-3 w-50 text-left"
                    style={{ margin: "20px 0 " }}
                  >
                    <Form.Label>
                      Date <span style={{ color: "red" }}>*</span>
                    </Form.Label>
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
                  <Form.Group
                    className="record-input,mb-3 w-50 text-left"
                    style={{ margin: "20px 0 " }}
                  >
                    <Form.Label>
                      Recorded By <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="record"
                      onChange={handleChange}
                      value={values.record || ""}
                    />

                    {errors.record && (
                      <p className="help danger" style={{ color: "red" }}>
                        {errors.record}
                      </p>
                    )}
                  </Form.Group>

                  <Form.Group
                    style={{ width: "20%", padding: "1px" }}
                    controlId="formFile"
                    className="mb-3 w-50 text-left"
                  >
                    <Form.Label style={{ width: "20%", padding: "1px" }}>
                      attachment <span style={{ color: "red" }}>*</span>
                    </Form.Label>
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
                  <div className="ma" style={{ bottom: "0px", right: "10px" }}>
                    <Button
                      className="btn btn-primary"
                      style={{ width: "150px", height: "50px", margin: "10px" }}
                      type="submit"
                    >
                      {" "}
                      Update{" "}
                    </Button>
                    <Button
                      className="btn btn-primary"
                      style={{ width: "100px", height: "50px", margin: "10px" }}
                      type="reset"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
}
export default RecordDetailEdit;
