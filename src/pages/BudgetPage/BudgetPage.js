import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useRef, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import BudgetDetailForm from "../BudgetDetailForm/BudgetDetailForm";
import RecordDetail from "../RecordDetail/RecordDetail";
import "./BudgetPage.css";
import Loading from "../../common/Loading/Loading";

import DataTable from "react-data-table-component";
import BudgetEditForm from "../BudgetDetailForm/BudgetEditForm";
import RecordDetailEdit from "../RecordDetail/RecordDetailEdit";
import SideBar from "../../layouts/ProjectModuleLayout/SideBar";

function BudgetPage() {
  const { path } = useRouteMatch();
  const { projectId, name } = useParams();

  const [payments, setPayments] = useState([]);
  const [price, setprice] = useState(0);
  const [Received, setReceived] = useState(0);
  const [yetToReceived, setYetToReceived] = useState(0);
  const [RealCost, setRealCost] = useState(0);
  const [EstimatedCost, setEstimatedCost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [budget, setBudget] = useState(null);

  const columns = [
    {
      name: "Created",
      selector: (row) => row.created.split("T")[0],
    },
    {
      name: "Paid Person",
      selector: (row) => row.paidby,
    },
    {
      name: "Amount(LKR)",
      selector: (row) => row.amount,
    },
    {
      name: "Attachment",
      selector: (row) => row.attachment,
      cell: (row, index) => (
        <Button
          variant="light"
          onClick={() => {
            const byteCharacters = atob(
              row.attachment.substr(`data:application/pdf;base64,`.length)
            );
            const byteArrays = [];

            for (
              let offset = 0;
              offset < byteCharacters.length;
              offset += 1024
            ) {
              const slice = byteCharacters.slice(offset, offset + 1024);

              const byteNumbers = new Array(slice.length);
              for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              const byteArray = new Uint8Array(byteNumbers);

              byteArrays.push(byteArray);
            }
            const blob = new Blob(byteArrays, { type: "application/pdf" });
            const blobUrl = URL.createObjectURL(blob);

            window.open(blobUrl, "_blank");
          }}
        >
          Open Attachment
        </Button>
      ),
    },
    {
      name: "Action",
      selector: (row) => row.id,
      cell: (row, index) => (
        <Link
          to={`/project/${name}/${projectId}/budget/RecordDetailEdit/${row.id}`}
        >
          <Button
            variant="primary"
            style={{
              margin: "10px",
              backgroundColor: "#305995",
              width: "fit-content",
            }}
          >
            Edit
          </Button>
        </Link>
      ),
    },
  ];

  const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        backgroundColor: "#305995",
        color: "white",
      },
    },
    rows: {
      style: {
        justifyContent: "center",
        backgroundColor: "#D3D3D3",
      },
    },
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5148/api/Budget/ProjectId/${projectId}`)
      .then((Response) => {
        setYetToReceived(Response.data.result.yetToReceive);
        setBudget(Response.data.result);
        setprice(Response.data.result.totalBudget);
        setReceived(Response.data.result.received);
        setRealCost(Response.data.result.actualcost);
        setEstimatedCost(Response.data.result.plannedcost);
      })
      .catch((Error) => {
        console.log(Error);
      });

    axios
      .get(`http://localhost:5148/api/Payment/ProjectId/${projectId}`)
      .then((Response) => {
        setPayments(Response.data.result);
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Switch>
            <Route exact path={path}>
              <div className="d-flex align-items-baseline">
                <SideBar />
                <div style={{ width: "-webkit-fill-available" }}>
                  <div style={{ textAlign: "left", paddingLeft: "10px" }}>
                    <Link to={"/project"}>Projects</Link>
                    <Link to={`/project/${name}/${projectId}`}>
                      /{name}({projectId})
                    </Link>
                    <Link to={`/project/${name}/${projectId}/budget`}>
                      /Budget
                    </Link>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "20px",
                        font: "inter",
                        fontWeight: 600,
                        margin: "1.2rem",
                      }}
                    >
                      Budget
                    </p>
                    {!budget ? (
                      <Link
                        to={`/project/${name}/${projectId}/budget/BudgetDetailForm`}
                      >
                        <Button
                          variant="primary"
                          style={{
                            margin: "10px",
                            backgroundColor: "#305995",
                            width: "fit-content",
                          }}
                        >
                          Add Budget
                        </Button>
                      </Link>
                    ) : (
                      <Link
                        to={`/project/${name}/${projectId}/budget/BudgetDetailEditForm`}
                      >
                        <Button
                          variant="primary"
                          style={{
                            margin: "10px",
                            backgroundColor: "#305995",
                            width: "fit-content",
                          }}
                        >
                          Edit Budget
                        </Button>
                      </Link>
                    )}
                  </div>
                  <InputGroup
                    className="progress-group"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Col className="projectId-input" sm={8}>
                      <div class="p-2 ">
                        <ProgressBar
                          className="progress1 bg-secondary"
                          variant="danger"
                          label={`${Math.round((Received / price) * 100)}%`}
                          style={{ width: "80%" }}
                          now={(Received / price) * 100}
                        />
                      </div>
                      <div class="p-2 ">
                        {RealCost < price ? (
                          <ProgressBar
                            className="progress2 bg-secondary"
                            variant="success"
                            label={`${Math.round((RealCost / price) * 100)}%`}
                            style={{ width: "80%" }}
                            now={(RealCost / price) * 100}
                          />
                        ) : (
                          <ProgressBar
                            className="progress2 bg-success"
                            variant="secondary"
                            label={`${Math.round((price / RealCost) * 100)}%`}
                            style={{ width: "80%" }}
                            now={(price / RealCost) * 100}
                          />
                        )}
                      </div>
                    </Col>
                    <Col className="card-input" sm={4}>
                      <Card style={{ width: "16rem", margin: "10px" }}>
                        <Card.Body>
                          <div>
                            <ul style={{ textAlign: "left" }}>
                              <li>
                                <div className="rectrangel-1 bg-secondary"></div>
                                <p className="text-1">Price</p>
                              </li>
                              <li>
                                {" "}
                                <div className="rectrangel-2 bg-danger"> </div>
                                <p className="text-1">Received Payments</p>
                              </li>
                              <li>
                                {" "}
                                <div className="rectrangel-3 bg-success"> </div>
                                <p className="text-1">Real Cost</p>
                              </li>
                            </ul>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </InputGroup>
                  <InputGroup
                    className="input-group"
                    style={{ width: "105%", padding: "0.2rem" }}
                  >
                    <Col className="d-flex justify-content-center">
                      <Card style={{ width: "195px", height: "114px" }}>
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
                      <Card style={{ width: "195px", height: "114px" }}>
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
                      <Card style={{ width: "195px", height: "114px" }}>
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
                      <Card style={{ width: "195px", height: "114px" }}>
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
                      {yetToReceived != 0 ? (
                        <Link
                          to={`/project/${name}/${projectId}/budget/RecordDetail`}
                        >
                          <Button
                            variant="primary"
                            style={{
                              margin: "10px",
                              backgroundColor: "#305995",
                              width: "fit-content",
                            }}
                          >
                            Add Payment
                          </Button>
                        </Link>
                      ) : null}
                    </Col>
                  </InputGroup>

                  <div class="p-2 table">
                    <DataTable
                      style={{ borderRadius: "10px" }}
                      columns={columns}
                      data={payments}
                      pagination={true}
                      progressPending={loading}
                      progressComponent={
                        <>
                          <Loading />
                        </>
                      }
                      customStyles={tableCustomStyles}
                    />
                  </div>
                </div>
              </div>
            </Route>
            <Route path={`${path}/RecordDetail`} component={RecordDetail} />
            <Route
              path={`${path}/BudgetDetailForm`}
              component={BudgetDetailForm}
            />
            <Route
              path={`${path}/BudgetDetailEditForm`}
              component={BudgetEditForm}
            />
            <Route
              path={`${path}/RecordDetailEdit/:id`}
              component={RecordDetailEdit}
            />
          </Switch>
        </>
      )}
    </>
  );
}

export default BudgetPage;
