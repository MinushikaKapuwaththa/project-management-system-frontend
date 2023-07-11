import { PDFDownloadLink, PDFViewer, usePDF } from "@react-pdf/renderer";
import "./Invoice.css";
import PdfDocument from "../../components/generateInvoice/Invoice";
import Loading from "../../common/Loading/Loading";
import { useEffect } from "react";

function Invoice({ invoiceData }) {
  const fileName = "Invoice.pdf";

  return (
    <div className="App">
      <PDFViewer width={800} height={500} showToolbar={false}>
        <PdfDocument invoicedata={invoiceData} />
      </PDFViewer>

      <div className="download-link">
        <PDFDownloadLink
          document={<PdfDocument invoicedata={invoiceData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) => {
            if (loading) {
              return <Loading />;
            }

            console.log(blob);

            if (error) {
              return "";
            }

            return "Download Invoice";
          }}
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default Invoice;
