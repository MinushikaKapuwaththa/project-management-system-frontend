import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 0,
    },
    reportTitle: {
        color: 'black',
        letterSpacing: 0,
        lineHeight: 0.5,
        fontSize: 17,
        textAlign: 'center',
        textTransform: 'Sentence case',
    }
});

const InvoiceTitle = ({ title }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
);

export default InvoiceTitle;