import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const IndexCard3by5 = () => (
  <Document>
    <Page size="A7" orientation="landscape">
      <Text style={styles.label}>Title: </Text>
      <Text style={styles.body}> Lorem ipsum dolor sit amet. </Text>

      <Text style={styles.label}>Start date: </Text>
      <Text style={styles.body}> 2021-07-29</Text>
    </Page>
  </Document>
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
