import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';


const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
       
    },
    reportTitle: {
        color: 'black',
        letterSpacing: 0,
        fontSize: 12,
        textAlign: 'Align Left',
        textTransform: 'Sentence case',
    }
});

const InvoiceItemsTable = ({ invoice }) => (
    <View style={styles.tableContainer}>
        <Text style={styles.reportTitle}>Given below are the invoice details.</Text>
        <InvoiceTableHeader />
        <InvoiceTableRow items={invoice.items} />
    </View>
);

export default InvoiceItemsTable;