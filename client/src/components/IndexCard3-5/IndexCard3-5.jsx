import React from "react";
import {
  Page,
  Text,
  View,
  PDFViewer,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
const IndexCard3by5 = ({ taskForPrinting }) => (
  <PDFViewer showToolbar="true" width="300" height="200">
    <Document>
      <Page size="A7" orientation="landscape">
        <Text style={styles.label}>Title: </Text>
        {console.log("task for printing", taskForPrinting[0])}
        <Text style={styles.body}>{taskForPrinting.title}</Text>

        <Text style={styles.label}>Start date: </Text>
        <Text style={styles.body}> {taskForPrinting.startDate}</Text>
      </Page>
    </Document>
  </PDFViewer>
);

const styles = StyleSheet.create({
  body: {
    fontsize: 14,
  },
  label: {
    fontsize: 14,
    color: "grey",
  },
});

export default IndexCard3by5;
