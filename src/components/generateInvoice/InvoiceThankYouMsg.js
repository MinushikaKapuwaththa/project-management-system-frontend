import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "./Picture2.png";

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 12,
  },
  reportTitle: {
    fontSize: 11,
    textAlign: "",
    textTransform: "capitalize",
  },
  middle: {
    fontSize: 11,
    textAlign: "justify",
    textTransform: "capitalize",
    lineHeight: 2.0,
    marginLeft: "20%",
    marginRight: "",
    width: "80%",
  },
  logo: {
    position: "relative",
    top: 60,
    left: 0,
  },
});

const InvoiceThankYouMsg = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>
      Please be kind enough to draw the cheque in favor of “G3 Technologies
      (PVT) LTD” or deposit to the A/C below.
    </Text>

    <Text style={[styles.middle, { marginTop: 5 }]}>
      A/C No : 0211 1000 1905
    </Text>
    <Text style={styles.middle}>Name : G3 Technologies (Pvt) Ltd</Text>
    <Text style={styles.middle}>Bank : Sampath Bank</Text>
    <Text style={styles.middle}>Branch : Thalahena Branch</Text>

    <Text style={[styles.reportTitle, { marginTop: 5 }]}>Thanking You</Text>
    <Text style={styles.reportTitle}>Yours respectfully</Text>
    <Text style={[styles.reportTitle, { marginTop: 10 }]}>Nadun Wijetunge</Text>
    <Text style={styles.reportTitle}>Director</Text>

    <Text style={styles.reportTitle}>
      G3 Technologies (Pvt) Ltd, No 485/9/E, Mulleriyawa Road, Thalahena,
      Malabe.
    </Text>
    <Image style={styles.logo} src={logo} />
  </View>
);

export default InvoiceThankYouMsg;
