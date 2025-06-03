import React, { useState } from "react";
import "./people.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// SearchBar Handle

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

export default function People() {
  const [statusAll, setStatusAll] = React.useState("");

  const handleChange = (event) => {
    setStatusAll(event.target.value);
  };

  const [lgShow, setLgShow] = useState(false);

  // Form Handle

  const [fullName, setFullName] = useState("");
  const [company, setEmployeeId] = useState("");
  const [position, setPosition] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
  };

  const isContactNumberValid = (value) => {
    // regex pattern to match phone numbers of format +X-XXX-XXX-XXXX
    const phoneRegex = /^\+(?:[0-9] ?){10,10}[0-9]$/;
    return phoneRegex.test(value);
  };

  return (
    <div className="people">
      <div className="peopleglass">
        <div className="peopleContainer">
          <br />
          <Form>
            <Row
              className="align-items-center justify-content-between"
              Col
              xs={8}
            >
              <Col md={2}>
                {/* PeopleSearch  */}

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
                    <MenuItem value={1}>Status 1</MenuItem>
                    <MenuItem value={2}>Status 2</MenuItem>
                    <MenuItem value={3}>Status 3</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col md={3}>
                <div className="addmember">
                  {/* Add NewPeople */}
                  <>
                    <Button onClick={() => setLgShow(true)}>
                      +Add New Client
                    </Button>

                    <Modal
                      size="lg"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Add Client Person
                        </Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        {/* AddPeopleForm  */}
                        <div>
                          <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                          >
                            <Row className="mb-3">
                              <Form.Group
                                as={Col}
                                md="5"
                                controlId="formGroupName"
                              >
                                <Form.Label>Full Name*</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  value={fullName}
                                  onChange={(event) =>
                                    setFullName(event.target.value)
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter your full name.
                                </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group
                                as={Col}
                                md="5"
                                controlId="formGroupEmployeeId"
                              >
                                <Form.Label>Company*</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  value={company}
                                  onChange={(event) =>
                                    setEmployeeId(event.target.value)
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter Company.
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Row>

                            <Row className="mb-3">
                              <Form.Group
                                as={Col}
                                md="5"
                                controlId="formGroupType"
                              >
                                <Form.Label>Position*</Form.Label>
                                <Form.Select
                                  required
                                  value={position}
                                  onChange={(event) =>
                                    setPosition(event.target.value)
                                  }
                                >
                                  <option value=""></option>
                                  <option value="Type 1">Owner</option>
                                  <option value="Type 2">Acountant</option>
                                  <option value="Type 2">Manager</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  Select the correct position.
                                </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group
                                as={Col}
                                md="5"
                                controlId="contactNumber"
                              >
                                <Form.Label>Contact Number*</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="+X-XXX-XXX-XXXX"
                                  value={contactNumber}
                                  onChange={(event) => {
                                    setContactNumber(event.target.value);
                                    if (
                                      !isContactNumberValid(event.target.value)
                                    ) {
                                      event.target.setCustomValidity(
                                        "Please enter a valid phone number in the format +X-XXX-XXX-XXXX"
                                      );
                                    } else {
                                      event.target.setCustomValidity("");
                                    }
                                  }}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter your Contact Number.
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Row>

                            <Row>
                              <Form.Group
                                as={Col}
                                md="5"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  required
                                  type="email"
                                  value={email}
                                  onChange={(event) =>
                                    setEmail(event.target.value)
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter valied email.
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Row>

                            <br />
                            <Row>
                              <Form.Group as={Col} md="4">
                                <Button
                                  as="input"
                                  type="submit"
                                  value="Submit"
                                />{" "}
                                <Button as="input" type="reset" value="Reset" />
                                {""}
                              </Form.Group>
                            </Row>
                          </Form>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </>
                </div>
              </Col>
            </Row>
          </Form>

          <br />

          {/* TablePeople  */}

          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>FullName</th>
                  <th>CompanyName</th>
                  <th>Position</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Kamal Silva</td>
                  <td>ABC</td>
                  <td>Owner</td>
                  <td>...</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
