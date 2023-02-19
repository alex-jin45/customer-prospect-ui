import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import * as opportunities from "./opportunities.json";

import Card from "./Card";

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;
  const maxIndex = data.length - 1;

  const [cardShown, setCardShown] = React.useState(false);
  const rowIndex = React.useRef(0);
  const [currentRow, setCurrentRow] = React.useState(data[0]);

  React.useEffect(() => {
    document.addEventListener("keyup", detectKeyUp, true);
  }, []);

  const detectKeyUp = (e) => {
    if (e.key === "ArrowRight" && rowIndex.current < maxIndex) {
      rowIndex.current = rowIndex.current + 1;
      setCurrentRow(data[rowIndex.current]);
    }
    if (e.key === "ArrowLeft" && rowIndex.current > 0) {
      rowIndex.current = rowIndex.current - 1;
      setCurrentRow(data[rowIndex.current]);
    }
  };

  const handleRowClick = (event, row) => {
    setCardShown(!cardShown);
    rowIndex.current = row.oppId - 1;
    setCurrentRow(row);
  };

  return (
    <>
      {cardShown && (
        <Card
          currentRow={currentRow}
          setCardShown={setCardShown}
          cardShown={cardShown}
          function={detectKeyUp}
        />
      )}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="mainTable">
          <TableHead>
            <TableRow>
              <TableCell align="left" bold="true">
                <strong>Opp Name</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Stage</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Rep Probability</strong>
              </TableCell>
              <TableCell align="right">
                <strong>PX Probability</strong>
              </TableCell>
              <TableCell align="left">
                <strong>PX Tier</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Amount</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Product</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Sales Rep</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => handleRowClick(event, row)}
                key={row.oppId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.oppName}
                </TableCell>
                <TableCell align="left">{row.stage}</TableCell>
                <TableCell align="right">{row.repProbability}</TableCell>
                <TableCell align="right">{row.pilytixProbability}</TableCell>
                <TableCell align="left">{row.pilytixTier}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">{row.salesRepName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
