import React from "react";
import {
  Page,
  Text,
  View,
  PDFViewer,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

function checkBoxPicks() {
  let result = [];
  const checkChoices = document.getElementsByClassName("printCheckbox");
  for (let i in checkChoices) {
    result.push(checkChoices[i].checked ? checkChoices[i].id : null);
  }
  console.log("result", result);
  return result;
}

function createIndexCards() {}

const IndexCard3by5 = ({ taskForPrinting }) => (
  <div className="indexCard">
    <button onClick={checkBoxPicks}>Print selected tasks</button>
    <PDFViewer showToolbar="true" width="500" height="400">
      <Document>
        <Page size="A7" orientation="landscape">
          <Text style={styles.label}>Title: </Text>
          {console.log("task for printing", taskForPrinting[0])}
          <Text style={styles.body}>{taskForPrinting[3].title}</Text>
          <Text style={styles.label}>Start date: </Text>
          <Text style={styles.body}> {taskForPrinting[3].startDate}</Text>
        </Page>

        <Page size="A7" orientation="landscape">
          <Text style={styles.label}>Title: </Text>
          <Text style={styles.body}>{taskForPrinting[1].title}</Text>
          <Text style={styles.label}>Start date: </Text>
          <Text style={styles.body}> {taskForPrinting[1].startDate}</Text>
        </Page>
      </Document>
    </PDFViewer>
  </div>
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
