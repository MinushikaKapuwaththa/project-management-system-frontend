// import React, {useState,useEffect} from 'react';
// import { styled } from '@mui/material/styles';
// import Table from "react-bootstrap/Table";
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { AiFillDelete } from "react-icons/ai";
// import { HiDocumentDownload } from "react-icons/hi";
// import { TbLoader } from "react-icons/tb";
// import { downloadDocument, deleteDocument } from "../../services/G3APIService";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import moment from 'moment'


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const getFileIcon = (fileName) => {
//   let extension = fileName.split('.').pop();
//   let icon;
//   switch(extension.toLowerCase()) {
//     case 'pdf':
//        icon = 'pdf-icon'
//       break;
//     case 'docx':
//        icon = 'docx-icon'
//       break;
//     case 'txt':
//       icon = 'txt-icon'
//        break;
//     case 'png':
//     case 'jpg':
//     case 'jpeg':
//       icon = 'img-icon'
//        break;
//     default:
//       icon = 'docx-icon'
//   }
//   return require(`../../images/icons/${icon}.png`)
// }

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(id, name, status, lead, priority) {
//   return { id, name, status, lead, priority };
// }

// const rows = [
//   createData('HMS_001_SRS.pdf', ' Smith Martin Info Fix.Put.ltd', 'SRS', '1/5/2023', ''),
//     createData('HMS_001_Requirenment_page.pdf', ' Smith Martin Info Fix.Put.ltd', 'Requirnments', '1/5/2023', ''),
//     createData('HMS_001_Payement.pdf', ' Kamal Perera A.B.C.Put.ltd', 'Payments', '1/5/2023', ''),
// ];

// export default function CustomizedTables(props) {
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [idToDownload, setIdToDownload] = useState(0);
//   const [show, setShow] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState("");
//   const [isPending, setIsPending] = useState(false);
  
//   const handleDownload = (documentId, fileName) => {
//     setIsDownloading(true);
//     setIdToDownload(documentId);
//     downloadDocument(documentId).then((response) => { 
//               // create file link in browser's memory
//               const href = URL.createObjectURL(response.data);
    
//               const link = document.createElement('a');
//               link.href = href;
//               link.setAttribute('download', fileName);
//               document.body.appendChild(link);
//               link.click();
//               setIsDownloading(false);
//               document.body.removeChild(link);
//               URL.revokeObjectURL(href);
//     });
//   }

//   const openDeletePopup = (docId) => {
//     setItemToDelete(docId);
//     setShow(true);
//   };

//   const deleteDocumentItem = () => {
//     setIsPending(true);
//     deleteDocument(itemToDelete).then((response) => {
//       setIsPending(false);
//       props.callbackModal(true);
//       setShow(false);
//     });
//   };


//   const handleDeletePopupClose = () => setShow(false);

//   return (
//     <div style={{ height: 400, overflow: 'auto' }}>



// const [documents, setDocuments] = useState(null);



// <Table striped bordered>
//         <thead className="bg-dark text-light">
//           <tr>
//             <th>File</th>
//             <th className="text-center">Project</th>
//             <th className="text-center">Document Type</th>
//             <th className="text-center">Date</th>
//             <th className="text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.documents.length === 0 && (
//             <p className="p-3 fw-bold">No Data to Display</p>
//           )}
//           {props.documents.map((doc) => (
//             <tr key={doc.documentId}>
//                <td><div className='file-item'>
//                 <img draggable='false' className='file-item-icon' src={getFileIcon(doc.actualFileName)} 
//                 alt='txt-file' width={20} height={20}/>
//                 {doc.actualFileName}
//                 </div></td>
//               <td className="text-center">{doc.projectName}</td>
//               <td className="text-center">{doc.type}</td>
//               <td className="text-center">
//                 {moment(doc.date).format('MM/DD/YYYY')}
//               </td>
//               <td className="text-center">
//               {(doc.documentId == idToDownload && isDownloading) ? <TbLoader size={20} className="spinner"/> : <HiDocumentDownload
//                     size={20}
//                     onClick={() => handleDownload(doc.documentId, doc.actualFileName)}
//                   />}{" "}
//                   |{" "}
//                   <AiFillDelete
//                     size={20}
//                     color="red"
//                     onClick={() => openDeletePopup(doc.documentId)}
//                   />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       {/* <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>File</StyledTableCell>
//               <StyledTableCell>Comapny</StyledTableCell>
//               <StyledTableCell>Document Type</StyledTableCell>
//               <StyledTableCell>Date</StyledTableCell>
//               <StyledTableCell>Actions</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {props.documents.map((row) => (
//               <StyledTableRow key={row.documentId}>
//                 <StyledTableCell>
//                   <div className='file-item'>
//                 <img draggable='false' className='file-item-icon' src={getFileIcon(row.actualFileName)} alt='txt-file' width={20} height={20}/>
//                 {row.actualFileName}
//                 </div>
//                 </StyledTableCell>
//                 <StyledTableCell>
//                   {row.company}
//                 </StyledTableCell>
//                 <StyledTableCell>
//                   {row.type}
//                 </StyledTableCell>
//                 <StyledTableCell>
//                   {row.date}
//                 </StyledTableCell>
//                 <StyledTableCell>
//                 {(row.documentId == idToDownload && isDownloading) ? <TbLoader size={20} className="spinner"/> : <HiDocumentDownload
//                     size={20}
//                     onClick={() => handleDownload(row.documentId, row.actualFileName)}
//                   />}{" "}
//                   |{" "}
//                   <AiFillDelete
//                     size={20}
//                     color="red"
//                     onClick={() => openDeletePopup(row.documentId)}
//                   />
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer> */}

//       {/* Delete Confirmation PopUp */}
//       <Modal show={show} onHide={handleDeletePopupClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Are you sure?</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to delete this document? 
//           This action cannot be undone.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleDeletePopupClose}>
//             Close
//           </Button>
//           <Button
//             variant="danger"
//             onClick={deleteDocumentItem}
//             disabled={isPending}
//           >
//             {isPending ? "Deleting..." : "Delete"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
