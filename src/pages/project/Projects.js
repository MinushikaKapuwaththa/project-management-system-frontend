import React, { useState,useEffect } from "react";
import "./project.css";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputGroup from "react-bootstrap/InputGroup";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "./SideBar";
import { getProjects } from "../../services/projectService";

// Add SearchBar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[500], 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[500], 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 1,
  flexGrow: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Project() {

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    getProjects().then((res) => setProjectData(res.data.result));
    console.log(projectData);
  }, []);
  const [statusAll, setStatusAll] = React.useState("");

  const handleChange = (event) => {
    setStatusAll(event.target.value);
  };

  // Create project
  const [lgShow, setLgShow] = useState(false);
  const [startdate, setStartdate] = useState(new Date());
  const [estimatedEndDate, setEstimatedEndDate] = useState(new Date());
  const [ProjectName, setProjectName] = useState("");
  const [KeyValue, SetKeyValue] = useState("");
  const [ClientName, SetClientName] = useState("");
  const [ReportedBy, SetReportedBy] = useState("");
  const [TypeOf, SetTypeOf] = useState("");
  const [LeadBy, SetLeadBy] = useState("");
  const [validated, setValidated] = useState(false);

  const handleStartdateChange = (date) => {
    setStartdate(date);
  };

  const handleEstimatedEndDateChange = (date) => {
    setEstimatedEndDate(date);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    console.log("Form submitted successfully");
  };

  return (
    <div className="project">
      <div className="projectglass">
        <div className="proCont">
          <h5> Projects </h5>

          <Form>
            <Row
              className="align-items-center justify-content-between"
              Col
              xs={10}
            >
              <Form className="d-flex">
                <Col md={2}>

                  {/* SearchBar */}
                  <Box sx={{ flexGrow: 1, marginLeft: 0 }}>
                    <Toolbar>
                      <Search>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search…"
                          inputProps={{ "aria-label": "search" }}
                        />
                      </Search>
                    </Toolbar>
                  </Box>
                </Col>

                <Col md={2}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-helper-label">
                      Status-All
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={statusAll}
                      label="status"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>Done</MenuItem>
                      <MenuItem value={2}>In Progress</MenuItem>
                    </Select>
                  </FormControl>
                </Col>

                {/* Create Project Form */}
                <div className="createproject">
                  <>
                    <Button onClick={() => setLgShow(true)}>+Create New</Button>

                    <Modal
                      size="lg"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Create Project
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form
                          noValidate
                          validated={validated}
                          onSubmit={handleSubmit}
                        >
                          <Row className="mb-3 w-100">
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId="validatecustomer01"
                            >
                              <Form.Label>Project Name*</Form.Label>
                              <Form.Control
                                required
                                type="text"
                                value={ProjectName}
                                onChange={(event) =>
                                  setProjectName(event.target.value)
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                Please enter Project name.
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              md="5"
                              controlId="validationCustom02"
                            >
                              <Form.Label>Key*</Form.Label>
                              <Form.Control
                                required
                                type="text"
                                placeholder=""
                                value={KeyValue}
                                onChange={(event) =>
                                  SetKeyValue(event.target.value)
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a Key value.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId="validationCustom03"
                            >
                              <Form.Label>Client Name*</Form.Label>
                              <Form.Control
                                required
                                type="text"
                                placeholder=""
                                value={ClientName}
                                onChange={(event) =>
                                  SetClientName(event.target.value)
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a Name.
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              md="5"
                              controlId="validationCustom04"
                            >
                              <Form.Label>Reported By*</Form.Label>
                              <Form.Select
                                required
                                value={ReportedBy}
                                onChange={(event) =>
                                  SetReportedBy(event.target.value)
                                }
                              >
                                <option></option>
                                <option value="1">Bimal Perera</option>
                                <option value="2">Nadun Wijethunga</option>
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                Please provide a Name.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>

                          <Form.Group
                            className="md-3"
                            controlId="validationCustom05"
                          >
                            <Form.Label>Disription</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              type="textarea"
                              style={{ height: "75px", width: "420px" }}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please provide a Discription.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId="validationCustom04"
                            >
                              <Form.Label>Type*</Form.Label>
                              <Form.Select
                                required
                                value={TypeOf}
                                onChange={(event) =>
                                  SetTypeOf(event.target.value)
                                }
                              >
                                <option></option>
                                <option value="1">Type 1</option>
                                <option value="2">Type 2</option>
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                Please select a type.
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              md="5"
                              controlId="validationCustomUsername"
                            >
                              <Form.Label>Estimated Time</Form.Label>
                              <InputGroup>
                                <Form.Select
                                  placeholder="Select estimated time"
                                  min={null}
                                  max={500}
                                >
                                  {[...Array(501).keys()].map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </Form.Select>

                                <InputGroup.Text id="basic-addon2">
                                  Hours
                                </InputGroup.Text>
                              </InputGroup>
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="3"
                              controlId="formGroupStartdate"
                            >
                              <Form.Label>Start Date*</Form.Label>
                              <DatePicker
                                id="date-picker-Startdate"
                                selected={startdate}
                                onChange={handleStartdateChange}
                                dateFormat="MM/dd/yyyy"
                              />
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              md="3"
                              controlId="formGroupEstimatedEndDate"
                            >
                              <Form.Label>Estimated End Date*</Form.Label>
                              <DatePicker
                                id="date-picker-Estimated-End-Date"
                                selected={estimatedEndDate}
                                onChange={handleEstimatedEndDateChange}
                                dateFormat="MM/dd/yyyy"
                              />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="5"
                              controlId="validationCustomUsername"
                            >
                              <Form.Label>Estimated Budget</Form.Label>
                              <InputGroup>
                                <Form.Select
                                  placeholder="Select estimated time"
                                  min={null}
                                  max={500}
                                >
                                  {[...Array(501).keys()].map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </Form.Select>

                                <InputGroup.Text id="basic-addon2">
                                  Lkr
                                </InputGroup.Text>
                              </InputGroup>
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              md="5"
                              controlId="validationCustomUsername"
                            >
                              <Form.Label>Hourly Rate</Form.Label>
                              <InputGroup>
                                <Form.Select
                                  placeholder="Select estimated time"
                                  min={null}
                                  max={500}
                                >
                                  {[...Array(501).keys()].map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </Form.Select>

                                <InputGroup.Text id="basic-addon2">
                                  Lkr
                                </InputGroup.Text>
                              </InputGroup>
                            </Form.Group>
                          </Row>

                          <Row>
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="formGroupLead"
                            >
                              <Form.Label>Lead*</Form.Label>
                              <Form.Control
                                required
                                type="text"
                                placeholder=""
                                value={LeadBy}
                                onChange={(event) =>
                                  SetLeadBy(event.target.value)
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide a Name.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>

                          <br />
                          <Form.Group className="mb-3">
                            <Button type="submit">Submit form</Button>{" "}
                            <Button as="input" type="reset" value="Reset" />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </>
                </div>
              </Form>
            </Row>
          </Form>

          <br />

          {/* Table  */}
          
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Lead</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DS001</td>
                  <td>Demo Software project</td>
                  <td>Done</td>
                  <td>Amal Silva</td>
                  <td > <Button href="/view-project">View</Button> </td>
                </tr>
                <tr>
                  <td>DS001</td>
                  <td>Demo Software project</td>
                  <td>Done</td>
                  <td>Amal Silva</td>
                  <td > <Button href="/view-project">View</Button> </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <br />
      {/* <SideBar /> */}
      {/* <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Estimatetime</th>
            <th scope="col">Actualtime</th>
            <th scope="col">Remainingtime</th>
            <th scope="col">Stratdate</th>
            <th scope="col">Enddate</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((data, index) => (
            <tr key={index}>
              <th scope="row">{data.id}</th>
              <td>{data.name}</td>
              <td>{data.estimatetime}</td>
              <td>{data.actualtime}</td>
              <td>{data.remainingtime}</td>
              <td>{data.startdate}</td>
              <td>{data.enddate}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
  
    </div>
  );
}

export default Project;

