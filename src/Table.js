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

  const [cardShown, setcardShown] = React.useState(false);
  const [currentRow, setCurrentRow] = React.useState({});
  React.useEffect(() => {
    if (cardShown) {
      document.addEventListener("keydown", detectKeyDown, true);
    }
  }, [cardShown]);

  const detectKeyDown = (e) => {
    console.log("clicked key: ", e.key);
    if (e.key === "ArrowDown") {
      const nextRow = document.getElementById("mainTable").rows[0];
      console.log("Next Table row: " + nextRow);
    }
  };

  const handleRowClick = (event, row) => {
    setcardShown(!cardShown);
    //console.log(cardShown);
    setCurrentRow(row);
  };

  return (
    <div>
      <div className="Card">
        {cardShown && (
          <Card
            currentRow={currentRow}
            setCardShown={setcardShown}
            cardShown={cardShown}
          />
        )}
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="mainTable">
          <TableHead>
            <TableRow>
              <TableCell align="left">Opp Name</TableCell>
              <TableCell align="left">Opp Stage</TableCell>
              <TableCell align="right">Rep Probability</TableCell>
              <TableCell align="right">PX Probability</TableCell>
              <TableCell align="left">PX Tier</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Sales Rep</TableCell>
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
    </div>
  );
}
