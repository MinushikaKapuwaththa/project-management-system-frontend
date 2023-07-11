import { PDFDownloadLink, PDFViewer, usePDF } from "@react-pdf/renderer";
import "./Invoice.css";
import PdfDocument from "../../components/generateInvoice/Invoice";
import Loading from "../../common/Loading/Loading";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

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
          fileName={`${invoiceData.invoice_no}`}
        >
          {({ blob, url, loading, error }) => {
            if (loading) {
              return <Loading />;
            }
            if (blob) {
              const a = document.createElement("a");
              document.body.appendChild(a);
              const durl = window.URL.createObjectURL(blob);
              a.href = durl;
              a.download = `${invoiceData.invoice_no}`;
              a.click();
              setTimeout(() => {
                window.URL.revokeObjectURL(durl);
                document.body.removeChild(a);
              }, 0);
            }

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
