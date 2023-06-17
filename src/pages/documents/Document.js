
// import React, { useState, useMemo, useEffect } from 'react';
// import "./document.css";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// // import SearchDocument from "./SearchDocument";
// import TableDocument from "./TableDocument";
// import { getDocuments } from "../../services/G3APIService";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// import { useDropzone } from 'react-dropzone';
// import * as yup from 'yup';
// import * as formik from 'formik';
// import { uploadDocument, getProjectDataForDropdown } from "../../services/G3APIService";


// import { styled, alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';









// // Document Form

// const baseStyle = {
//   flex: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '30px',
//   borderWidth: 1,
//   borderRadius: 3,
//   borderColor: '#ced4da',
//   borderStyle: 'solid',
//   backgroundColor: '#fafafa',
//   color: 'black',
//   outline: 'none',
//   transition: 'border .24s ease-in-out'
// };

// const focusedStyle = {
//   borderColor: '#86b7fe',
//   outline: 0,
//   boxShadow: '0 0 0 0.25rem rgba(13,110,253,.25)'
// };

// const acceptStyle = {
//   borderColor: '#00e676'
// };

// const rejectStyle = {
//   borderColor: '#ff1744'
// };



// // SearchBar


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.grey[500], 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.grey[500], 0.25),
//   },
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginLeft:1,
//   flexGrow: 1,
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function Document(props) {
//   const [documents, setDocuments] = useState(null);
//   const [allDocuments, setAllDocuments] = useState(null);
//   const [lgShow, setLgShow] = useState(false);
//   const [loadDocuments, setLoadDocuments] = useState(false);

//   useEffect(() => {
//     getDocuments().then((response) => {
//       console.log(response.data)
//       setDocuments(response.data);
//       setAllDocuments(response.data);
//       setLoadDocuments(false);
//     });
//   }, [loadDocuments]);

//   const callbackModal = (load) => {
//     setLgShow(false);
//     load && setLoadDocuments(load);
//   };

//   const handleSearchChange = (event) => {
//     let searchTerm = event.target.value;
//     searchTerm.trim()
//       ? setDocuments(
//           allDocuments.filter(
//             (c) => c.actualFileName.toLowerCase().includes(searchTerm.toLowerCase()) || c.projectName.toLowerCase().includes(searchTerm.toLowerCase())
//             || c.type.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//         )
//       : setDocuments(allDocuments);
//   };



// // Document Foam


// const [isPending, setIsPending] = useState(false);
//   const [projectData, setProjectData] = useState(null);

//   useEffect(() => {
//     getProjectDataForDropdown().then((response) => {
//       setProjectData(response.data);
//     });
//   }, [props.projectId])


//   const { Formik } = formik;

//   const {
//     acceptedFiles,
//     getRootProps,
//     getInputProps,
//     isFocused,
//     isDragAccept,
//     isDragReject
//   } = useDropzone({maxFiles : 1});

//   const getFileIcon = (file) => {
//     let extension = file.name.split('.').pop();
//     let icon;
//     switch(extension.toLowerCase()) {
//       case 'pdf':
//          icon = 'pdf-icon'
//         break;
//       case 'docx':
//          icon = 'docx-icon'
//         break;
//       case 'txt':
//         icon = 'txt-icon'
//          break;
//       case 'png':
//       case 'jpg':
//       case 'jpeg':
//         icon = 'img-icon'
//          break;
//       default:
//         icon = 'docx-icon'
//     }
//     return require(`../../images/icons/${icon}.png`)
//   }

//   const formatFileSize = (fileSize) => {
//     let size = (fileSize/1024);
//     if(size > 1000){
//       return (size/1024).toFixed(2).toString() + ' MB'
//     }
//     return size.toFixed(2).toString() + 'KB'
//   }

//   const files = acceptedFiles.map(file =>
//     (
//     <React.Fragment key={file.name}>
//     <img draggable='false' className='upload-item-icon' src={getFileIcon(file)} alt='txt-file' />
//     <div className='file-details'>
//       <h6 className='mb-0'>{file.name}</h6>
//       <p>{formatFileSize(file.size)}</p>
//     </div>
//     </React.Fragment>
//   ));

//   const style = useMemo(() => ({
//     ...baseStyle,
//     ...(isFocused ? focusedStyle : {}),
//     ...(isDragAccept ? acceptStyle : {}),
//     ...(isDragReject ? rejectStyle : {})
//   }), [
//     isFocused,
//     isDragAccept,
//     isDragReject
//   ]);


//   const schema = yup.object().shape({
//     Name: yup.string().required(),
//     Type: yup.string().required(),
//     ClientName: yup.string().required(),
//     Company: yup.string().required()
//   });

//   var initialValues = {
//     Name: "",
//     Type: "1",
//     ClientName: "",
//     Company: ""
//   }

//   const saveDocument = (data) => {
//     if(acceptedFiles.length === 0) {
//       return;
//     }
//     setIsPending(true);
//     const formData = new FormData();
//     formData.append('Name', data.Name);
//     formData.append('Type', +data.Type);
//     formData.append('ClientName', data.ClientName);
//     formData.append('Company', data.Company);
//     formData.append('ProjectId', data.ProjectId);
//     formData.append('File', acceptedFiles[0]);
//     console.log(formData);
//     uploadDocument(formData).then(response => {
//       setIsPending(false);
//       props.callbackModal(true);
//     })
//   };



//   return (
//     <div className="Document">
//       <div className="Documentglass">
//         <div className="p-4">
//           <h4> Documents </h4>
//           <Row className="align-items-center justify-content-between" xs={10}>
//               <Form className="d-flex">
               
//                {/* SearchBar */}
               
//                 <Col md={2} className="ps-0">
//                 <Box sx={{ flexGrow: 1, marginLeft: 0 }}>
//       <Toolbar>
        
//         <Search>
//           <SearchIconWrapper>
//             <SearchIcon />
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search"
//             inputProps={{ 'aria-label': 'search' }}
//             onChange={props.handleSearchChange}
//           />
//         </Search>
//       </Toolbar>
//     </Box>
//                 </Col>

//                 <div className="createdocument">
//                   <Button onClick={() => setLgShow(true)}>+Document</Button>
//                   <Modal
//                     size="lg"
//                     show={lgShow}
//                     onHide={() => setLgShow(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                   >
//                     <Modal.Header closeButton>
//                       <Modal.Title id="example-modal-sizes-title-lg">
//                         Upload Document
//                       </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                       {/* <DocumentForm callbackModal={callbackModal}/> */}

//                       <Formik
//       validationSchema={schema}
//       onSubmit={saveDocument}
//       initialValues={initialValues}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         values,
//         touched,
//         errors,
//       }) => {
//       return (
//     <Form noValidate onSubmit={handleSubmit}>
//       <Row>
//        <Form.Group as={Col} md="4" controlId="validationCustom01" className='mb-3'>
//           <Form.Label className='required-field'>Name</Form.Label>
//           <Form.Control type="text"
//               name="Name"
//               value={values.Name}
//               isValid={touched.Name && !errors.Name}
//               isInvalid={errors.Name && touched.Name}
//               onChange={handleChange}/>
//           <Form.Control.Feedback type="invalid">
//             Please provide Document Name.
//           </Form.Control.Feedback>
//         </Form.Group>
      
//         <Form.Group as={Col} md="4" controlId='validationCustom04'>
//              <Form.Label className='required-field'>Type</Form.Label>
//                 <Form.Select name="Type" value={values.Type} onChange={handleChange}>
//                       <option value ='1'>SRS</option>
//                       <option value='2'>Requirements</option>
//                       <option value='3'>Payments</option>
//                       <option value='3'>Others</option>
//                 </Form.Select> 
//         </Form.Group> 
//         <Form.Group as={Col} md="4" controlId="validationCustom03">
//           <Form.Label>Client Name</Form.Label>
//           <Form.Control name="ClientName"
//               value={values.ClientName}
//               isValid={touched.ClientName && !errors.ClientName}
//               isInvalid={errors.ClientName && touched.ClientName}
//               onChange={handleChange} />
//           <Form.Control.Feedback type="invalid">
//             Please provide Client Name.
//           </Form.Control.Feedback>
//         </Form.Group>

//         </Row>

//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label className='required-field'>Company</Form.Label>
//           <Form.Control name="Company"
//               value={values.Company}
//               isValid={touched.Company && !errors.Company}
//               isInvalid={errors.Company && touched.Company}
//               onChange={handleChange} />
//           <Form.Control.Feedback type="invalid">
//             Please provide a Company.
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group as={Col} md="6" controlId='validationCustom04' className="mb-3">
//              <Form.Label>Project Name</Form.Label>
//                 <Form.Select name="ProjectId" value={values.ProjectId} onChange={handleChange}>
//                 <option value ={0}>-Select Project-</option>
//                 {projectData && projectData.map((project) => (             
//                 <option value ={project.value} key={project.value}>{project.name}</option>
//                 ))}
//                 </Form.Select>

//         </Form.Group>
//         </Row>            
//       <div className="mb-3">
//       <Form.Label className='required-field'>Files</Form.Label>
//       <div {...getRootProps({style})}>
//         <input {...getInputProps()} />
//         <img src={require('../../images/icons8-upload-64.png')} width='50' alt='upload-icon'/>
//         <p>Drag and drop the document here, or click to select document</p>
//       </div>
//         <div className='file-upload-item mt-3'>
//             {files}
//         </div>

//     </div>

//       <Form.Group className="mb-3">
//       <Button type="submit" className="btn btn-primary float-end" disabled={isPending}>
//                 {isPending ? 'Uploading...' : 'Upload'}
//               </Button>
//           <Button as="input" type="reset" value="Cancel" className="btn btn-light me-2 float-end"/>
//       </Form.Group>

//     </Form>  )}} 
//       </Formik>




//                     </Modal.Body>
//                   </Modal>
//                 </div>
//           </Form>
//           </Row>
//           <br />
//           {documents && <TableDocument documents={documents} callbackModal={callbackModal}/> }

         

//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./document.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { getDocuments } from "../../services/G3APIService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DocumentForm from "./DocumentForm";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { HiDocumentDownload } from "react-icons/hi";
import { TbLoader } from "react-icons/tb";
import { downloadDocument, deleteDocument } from "../../services/G3APIService";
import moment from 'moment';
//import SideBar from "../../layouts/ProjectModuleLayout/SideBar";

const getFileIcon = (fileName) => {
  let extension = fileName.split('.').pop();
  let icon;
  switch(extension.toLowerCase()) {
    case 'pdf':
       icon = 'pdf-icon'
      break;
    case 'docx':
       icon = 'docx-icon'
      break;
    case 'txt':
      icon = 'txt-icon'
       break;
    case 'png':
    case 'jpg':
    case 'jpeg':
      icon = 'img-icon'
       break;
    default:
      icon = 'docx-icon'
  }
  return require(`../../images/icons/${icon}.png`)
}

//searchbar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[500], 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[500], 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft:1,
  flexGrow: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Document(props) {
  const [documents, setDocuments] = useState(null);
  const [allDocuments, setAllDocuments] = useState(null);
  const [lgShow, setLgShow] = useState(false);
  const [loadDocuments, setLoadDocuments] = useState(false);
  const [statusAll, setStatusAll] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [idToDownload, setIdToDownload] = useState(0);
  const [show, setShow] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [DocumentData, setDocumentData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    //let value = +e.target.value;
    setStatusAll(e.target.value);
   
  };

  useEffect(() => {
    getDocuments().then((response) => {
      console.log(response.data)
      setDocumentData(response.data);
      setAllDocuments(response.data);
      setLoadDocuments(false);
    });
  }, [loadDocuments]);

  const callbackModal = (load) => {
    setLgShow(false);
    load && setLoadDocuments(load);
  };

  //searchbar
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
   
  };

          //document table edit delete
        const handleDownload = (documentId, fileName) => {
          setIsDownloading(true);
          setIdToDownload(documentId);
          downloadDocument(documentId).then((response) => { 
            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);
  
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            setIsDownloading(false);
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
          });
        }

            const openDeletePopup = (docId) => {
              setItemToDelete(docId);
              setShow(true);
            };

            const deleteDocumentItem = () => {
              setIsPending(true);
              deleteDocument(itemToDelete).then((response) => {
                setIsPending(false);
               callbackModal(true);
                setShow(false);
              });
            };


            const handleDeletePopupClose = () => setShow(false);

  return (
    <div className="Document">
      <div className="Documentglass">
        <div className="p-4">
          <h4> Documents </h4>
        
          <Row className="align-items-center justify-content-between" xs={10}>
              <Form className="d-flex">
                <Col md={2} className="ps-0">
                {/* <SideBar/> */}
                  <Box sx={{ flexGrow: 1, marginLeft: 0 }}>
                    <Toolbar>
                      
                      <Search>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search"
                          inputProps={{ 'aria-label': 'search' }}
                          onChange={handleSearchChange}
                        />
                      </Search>
                    </Toolbar>
                  </Box>
                </Col>

                <div className="createdocument">
                  <Button onClick={() => setLgShow(true)}>+Document</Button>
                  <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Upload Document
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <DocumentForm callbackModal={callbackModal}/>
                    </Modal.Body>
                  </Modal>
                </div>
          </Form>
          </Row>
          <br />
          {/* {documents &&  */}
         
          <div style={{ height: 400, overflow: 'auto' }}>

        <Table striped bordered>
        <thead className="bg-dark text-light">
          <tr>
            <th className="text-center">ID</th>
            <th>File</th>
            <th className="text-center">Project</th>
            <th className="text-center">Document Type</th>
            <th className="text-center">Date</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {DocumentData.length === 0 && (
            <p className="p-3 fw-bold">No Data to Display</p>
          )}

          {/* //DocumentData.map((data) => ( */}
           { DocumentData.filter(Document => Document.projectName.toLowerCase().includes(searchTerm) || Document.type.toLowerCase().includes(searchTerm)).map((data) => ( 
        
             <tr>
                <td className="text-center">{data.documentId}</td>

               <td><div className='file-item'>
                <img draggable='false' className='file-item-icon' src={getFileIcon(data.actualFileName)} 
                alt='txt-file' width={20} height={20}/>
                {data.actualFileName}
                </div></td>

             
              <td className="text-center">{data.projectName}</td>
              <td className="text-center">{data.type}</td>
              <td className="text-center">
                {moment(data.date).format('MM/DD/YYYY')}
              </td>

              <td className="text-center">
                    {(data.documentId === idToDownload && isDownloading) ? <TbLoader size={20} className="spinner"/> : <HiDocumentDownload
                            size={20}
                            onClick={() => handleDownload(data.documentId, data.actualFileName)}
                        />}{" "}
                        |{" "}
                        <AiFillDelete
                            size={20}
                            color="red"
                            onClick={() => openDeletePopup(data.documentId)}
                        />
              </td>
              </tr>
           
         
           ))}
        </tbody>
     </Table>
                        

      {/* Delete Confirmation PopUp */}
      <Modal show={show} onHide={handleDeletePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this document? 
          This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeletePopupClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={deleteDocumentItem}
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