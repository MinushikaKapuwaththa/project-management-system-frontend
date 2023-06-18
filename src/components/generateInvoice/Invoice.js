import React from "react";
import { Page, Document, StyleSheet, Image, View } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";
import BillTo from "./BillTo";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import InvoiceItemsTable from "./InvoiceItemsTable";
import logo from "./Picture1.png"

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      fontFamily: 'Helvetica',
      fontSize: 11,
      paddingTop: 0,
      paddingBottom:0,
      paddingLeft: 50,
      paddingRight:50,
      lineHeight: 1.5,
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: 595, // A4 width in points (1 point = 1/72 inch)
  height: 842,
    },
    logo: {
        position:'relative' ,
        top: 0,
      
       

        
    },
  });
  

const PdfDocument = ({ invoicedata }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                
                <Image style={styles.logo} src={logo} />
                <InvoiceNo invoice={invoicedata} />
                <BillTo invoice={invoicedata} />
                <u> <b><InvoiceTitle title={'Invoice for'+invoicedata.projectName} /></b> </u>
                <InvoiceItemsTable invoice={invoicedata} />
                <InvoiceThankYouMsg />
            </Page>
        </Document>
    );
}

export default PdfDocument;