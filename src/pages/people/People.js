// import React, { useState } from "react";
// import "./people.css";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { styled, alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// // SearchBar Handle

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.grey[500], 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.grey[500], 0.25),
//   },
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginLeft: 1,
//   flexGrow: 1,
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// export default function People() {
//   const [statusAll, setStatusAll] = React.useState("");

//   const handleChange = (event) => {
//     setStatusAll(event.target.value);
//   };

//   const [lgShow, setLgShow] = useState(false);

//   // Form Handle

//   const [fullName, setFullName] = useState("");
//   const [company, setEmployeeId] = useState("");
//   const [position, setPosition] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     event.preventDefault();
//     event.stopPropagation();

//     if (form.checkValidity() === false) {
//       setValidated(true);
//       return;
//     }
//   };

//   const isContactNumberValid = (value) => {
//     // regex pattern to match phone numbers of format +X-XXX-XXX-XXXX
//     const phoneRegex = /^\+(?:[0-9] ?){10,10}[0-9]$/;
//     return phoneRegex.test(value);
//   };

//   return (
//     <div className="people">
//       <div className="peopleglass">
//         <div className="peopleContainer">
//           <br />
//           <Form>
//             <Row
//               className="align-items-center justify-content-between"
//               Col
//               xs={8}
//             >
//               <Col md={2}>
//                 {/* PeopleSearch  */}

//                 <Box sx={{ flexGrow: 1, marginLeft: 0 }}>
//                   <Toolbar>
//                     <Search>
//                       <SearchIconWrapper>
//                         <SearchIcon />
//                       </SearchIconWrapper>
//                       <StyledInputBase
//                         placeholder="Search…"
//                         inputProps={{ "aria-label": "search" }}
//                       />
//                     </Search>
//                   </Toolbar>
//                 </Box>
//               </Col>

//               <Col md={2}>
//                 <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//                   <InputLabel id="demo-select-helper-label">
//                     Status-All
//                   </InputLabel>
//                   <Select
//                     labelId="demo-select-small"
//                     id="demo-select-small"
//                     value={statusAll}
//                     label="status"
//                     onChange={handleChange}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={1}>Status 1</MenuItem>
//                     <MenuItem value={2}>Status 2</MenuItem>
//                     <MenuItem value={3}>Status 3</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Col>
//               <Col md={3}>
//                 <div className="addmember">
//                   {/* Add NewPeople */}
//                   <>
//                     <Button onClick={() => setLgShow(true)}>
//                       +Add New Client
//                     </Button>

//                     <Modal
//                       size="lg"
//                       show={lgShow}
//                       onHide={() => setLgShow(false)}
//                       aria-labelledby="example-modal-sizes-title-lg"
//                     >
//                       <Modal.Header closeButton>
//                         <Modal.Title id="example-modal-sizes-title-lg">
//                           Add Client Person
//                         </Modal.Title>
//                       </Modal.Header>

//                       <Modal.Body>
//                         {/* AddPeopleForm  */}
//                         <div>
//                           <Form
//                             noValidate
//                             validated={validated}
//                             onSubmit={handleSubmit}
//                           >
//                             <Row className="mb-3">
//                               <Form.Group
//                                 as={Col}
//                                 md="5"
//                                 controlId="formGroupName"
//                               >
//                                 <Form.Label>Full Name*</Form.Label>
//                                 <Form.Control
//                                   required
//                                   type="text"
//                                   value={fullName}
//                                   onChange={(event) =>
//                                     setFullName(event.target.value)
//                                   }
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                   Please enter your full name.
//                                 </Form.Control.Feedback>
//                               </Form.Group>

//                               <Form.Group
//                                 as={Col}
//                                 md="5"
//                                 controlId="formGroupEmployeeId"
//                               >
//                                 <Form.Label>Company*</Form.Label>
//                                 <Form.Control
//                                   required
//                                   type="text"
//                                   value={company}
//                                   onChange={(event) =>
//                                     setEmployeeId(event.target.value)
//                                   }
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                   Please enter Company.
//                                 </Form.Control.Feedback>
//                               </Form.Group>
//                             </Row>

//                             <Row className="mb-3">
//                               <Form.Group
//                                 as={Col}
//                                 md="5"
//                                 controlId="formGroupType"
//                               >
//                                 <Form.Label>Position*</Form.Label>
//                                 <Form.Select
//                                   required
//                                   value={position}
//                                   onChange={(event) =>
//                                     setPosition(event.target.value)
//                                   }
//                                 >
//                                   <option value=""></option>
//                                   <option value="Type 1">Owner</option>
//                                   <option value="Type 2">Acountant</option>
//                                   <option value="Type 2">Manager</option>
//                                 </Form.Select>
//                                 <Form.Control.Feedback type="invalid">
//                                   Select the correct position.
//                                 </Form.Control.Feedback>
//                               </Form.Group>

//                               <Form.Group
//                                 as={Col}
//                                 md="5"
//                                 controlId="contactNumber"
//                               >
//                                 <Form.Label>Contact Number*</Form.Label>
//                                 <Form.Control
//                                   required
//                                   type="text"
//                                   placeholder="+X-XXX-XXX-XXXX"
//                                   value={contactNumber}
//                                   onChange={(event) => {
//                                     setContactNumber(event.target.value);
//                                     if (
//                                       !isContactNumberValid(event.target.value)
//                                     ) {
//                                       event.target.setCustomValidity(
//                                         "Please enter a valid phone number in the format +X-XXX-XXX-XXXX"
//                                       );
//                                     } else {
//                                       event.target.setCustomValidity("");
//                                     }
//                                   }}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                   Please enter your Contact Number.
//                                 </Form.Control.Feedback>
//                               </Form.Group>
//                             </Row>

//                             <Row>
//                               <Form.Group
//                                 as={Col}
//                                 md="5"
//                                 controlId="formBasicEmail"
//                               >
//                                 <Form.Label>Email address</Form.Label>
//                                 <Form.Control
//                                   required
//                                   type="email"
//                                   value={email}
//                                   onChange={(event) =>
//                                     setEmail(event.target.value)
//                                   }
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                   Please enter valied email.
//                                 </Form.Control.Feedback>
//                               </Form.Group>
//                             </Row>

//                             <br />
//                             <Row>
//                               <Form.Group as={Col} md="4">
//                                 <Button
//                                   as="input"
//                                   type="submit"
//                                   value="Submit"
//                                 />{" "}
//                                 <Button as="input" type="reset" value="Reset" />
//                                 {""}
//                               </Form.Group>
//                             </Row>
//                           </Form>
//                         </div>
//                       </Modal.Body>
//                     </Modal>
//                   </>
//                 </div>
//               </Col>
//             </Row>
//           </Form>

//           <br />

//           {/* TablePeople  */}

//           <div>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>FullName</th>
//                   <th>CompanyName</th>
//                   <th>Position</th>
//                   <th></th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr>
//                   <td>Kamal Silva</td>
//                   <td>ABC</td>
//                   <td>Owner</td>
//                   <td>...</td>
//                 </tr>
//               </tbody>
//             </Table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./people.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import AddPeopleForm from "./AddPeopleForm";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Table from "react-bootstrap/Table";
import { getClients } from "../../services/ClientServices";
import { deleteClient } from "../../services/G3APIService";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


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

export default function Customer(props) {
  const [statusAll, setStatusAll] = useState("");
  const [clients, setClients] = useState(null);
  const [allClients, setAllClients] = useState(null);
  const [loadPeople, setLoadPeople] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");
  const [itemToEdit, setItemToEdit] = useState("");
  const [show, setShow] = useState(false);
  const [ClientData, setClientData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);


  const openDeletePopup = (personId) => {
    setItemToDelete(personId);
    setShow(true);
  };

  const openEditPopup = (personId) => {
    setItemToEdit(personId);
    setShowEditPopup(true);
  };

  const handleDeletePerson = () => {
      setIsPending(true);
      deleteClient(itemToDelete).then((response) => {
      setIsPending(false);
      callbackModal(true);
      setShow(false);
    });
  };

  const callbackEditModal = (load) => {
    setShowEditPopup(false);
    load && props.callbackModal(true);
  };

  const handleDeletePopupClose = () => setShow(false);


  useEffect(() => {
    getClients().then((res) => {
      setClientData(res.data);
      setAllClients(res.data);

    });

  }, [ClientData]);


  const handleChange = (e) => {
    //let value = +e.target.value;
    setStatusAll(e.target.value);
  };

  //searchbar
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const [lgShow, setLgShow] = useState(false);

  const callbackModal = (load, fromEdit = false) => {
    !fromEdit && setLgShow(false);
    load && setLoadPeople(load);
  };


  return (
    <div className="people">
      <div className="peopleglass">
        <div className="p-4">
          <h4 className="ps-4">Clients</h4>
          <Row className="align-items-center justify-content-between" xs={10}>
            <Form className="d-flex">
              <Col md={2} className="ps-0">


                <Box sx={{ flexGrow: 1, marginLeft: 0 }}>
                  <Toolbar>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        onChange={handleSearchChange}
                      />
                    </Search>
                  </Toolbar>
                </Box>


              </Col>
            
              <div className="newclient">
                <Button onClick={() => setLgShow(true)}>Add Client</Button>
                <Modal
                  size="normal"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Box>
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Add Client Person
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <AddPeopleForm
                        callbackModal={callbackModal}
                        isEdit={false}
                      />
                    </Modal.Body>
                  </Box>
                </Modal>
              </div>
            </Form>
          </Row>
          <br />

          <div style={{ height: "100%" }}>
            <Table striped bordered>
              <thead className="bg-dark text-light">
                <tr>
                  <th className="text-center">Client ID</th>
                  <th className="text-center">Client Name</th>
                  <th className="text-center">Client Type</th>
                  <th className="text-center">Company</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>

                {ClientData.length === 0 && (
                  <p className="p-3 fw-bold">No Data to Display</p>
                )}

                  {ClientData.filter(client => client.clientName.toLowerCase().includes(searchTerm) || client.company.toLowerCase().includes(searchTerm)).map((data) => ( 
                  
                  <tr key={data.clientId}>
                    <td className="text-center">{data.clientId}</td>
                    <td className="text-center">{data.clientName}</td>
                    <td className="text-center">{data.clientTypeName}</td>
                    <td className="text-center">{data.company}</td>
                    <td className="text-center">
                      <AiFillEdit
                        size={20}
                        onClick={() => openEditPopup(data.clientId)}
                      />{" "}
                      |{" "}
                      <AiFillDelete
                        size={20}
                        color="red"
                        onClick={() => openDeletePopup(data.clientId)}
                      />
                    </td>
                    </tr>
                  ))}


            </tbody>
            </Table>

            {/* Edit PopUp */}
            <Modal
              size="lg"
              show={showEditPopup}
              onHide={() => setShowEditPopup(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Edit Person
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <AddPeopleForm
                  callbackModal={callbackEditModal}
                  personId={itemToEdit}
                  isEdit={true}
                />
              </Modal.Body>
            </Modal>

            {/* Delete Confirmation PopUp */}
            <Modal show={show} onHide={handleDeletePopupClose}>
              <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this person? This action cannot be
                undone.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleDeletePopupClose}>
                  Close
                </Button>
                <Button
                  variant="danger"
                  onClick={handleDeletePerson}
                  disabled={isPending}
                >
                  {isPending ? "Deleting..." : "Delete"}
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

        </div>
      </div>
    </div>
  );
}





