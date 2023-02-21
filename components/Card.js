import React from "react";

import ProbabilityHistoryChart from "./ProbabilityHistoryChart";

import formatProbabilityHistory from "../src/helpers/formatProbabilityHistory";
import formatProbabilityFactors from "../src/helpers/formatProbabilityFactors";
import ProbabilityFactorsTrendChart from "./ProbabilityFactorsTrendChart";

import { Box, Grid, IconButton } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";

const Card = (props) => {
  const handleClick = () => {
    props.setCardShown(!props.cardShown);
  };

  const formattedProbHist = formatProbabilityHistory(
    props.currentRow.probabilityHistory,
    props.currentRow.pilytixProbability,
    props.currentRow.repProbability
  );

  const formattedProbFacts = formatProbabilityFactors(
    props.currentRow.pilytixFactorsIncreasingWin,
    props.currentRow.pilytixFactorsDecreasingWin
  );

  return (
    <>
      <Grid container spacing={0} m={0} mb={2}>
        <Grid item xs={11}>
          <Box
            ml={2}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <table>
              <tr>
                <td align="left" width="140px">
                  <div>Opportunity Number</div>
                </td>
                <td textAlign="left">
                  <Grid container spacing={0}>
                    <Grid item xs={1}>
                      <div>
                        <strong>{props.currentRow.oppId}</strong>
                      </div>
                    </Grid>
                    <Grid item xs={11}>
                      <div textAlign="right">
                        <SwitchLeftIcon fontSize="small" />
                        keys to scroll
                      </div>
                    </Grid>
                  </Grid>
                </td>
              </tr>
              <tr>
                <td align="left" width="140px">
                  <div>
                    Opportunity Stage{" "}
                    <strong>{props.currentRow.stage.match(/[0-9]+/)}</strong>
                  </div>
                </td>
                <td align="left">
                  <strong>
                    {props.currentRow.stage.replace(/[^a-zA-Z ]/g, "")}
                  </strong>
                </td>
              </tr>
              <tr>
                <td align="left" width="140px">
                  <div>Amount</div>
                </td>
                <td align="left">
                  <strong>${props.currentRow.amount}</strong>
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td align="left" width="140px">
                  <div>Opportunity Name</div>
                </td>
                <td align="left">
                  <strong>{props.currentRow.oppName}</strong>
                </td>
              </tr>
              <tr>
                <td align="left" width="140px">
                  <div>Product </div>
                </td>
                <td align="left">
                  <strong>{props.currentRow.product}</strong>
                </td>
              </tr>
              <tr>
                <td align="left" width="140px">
                  <div>Sales Representative</div>
                </td>
                <td align="left">
                  <strong>{props.currentRow.salesRepName} </strong>
                </td>
              </tr>
            </table>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={handleClick}>
            <CancelPresentationIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Box display="flex" flexWrap="wrap">
        <Box flex="1 1 320px" minWidth="320px" ml={2} align="center">
          <table>
            <tr>
              <td align="Center" colSpan="2">
                <strong>Probability History</strong>
              </td>
            </tr>
            <tr>
              <td align="left" width="140px">
                <div>PILYTIX Current</div>
              </td>
              <td align="left">
                <strong>
                  {props.currentRow.pilytixProbability.toFixed(2)}
                </strong>
              </td>
            </tr>
            <tr>
              <td align="left" width="140px">
                <div>Representative Current </div>
              </td>
              <td align="left">
                <strong>{props.currentRow.repProbability.toFixed(2)}</strong>
              </td>
            </tr>
          </table>
          <ProbabilityHistoryChart
            data={formattedProbHist}
            pxProb={props.currentRow.pilytixProbability}
          />
        </Box>
        <Box flex="1 1 320px" minWidth="320px" ml={2}>
          <strong>Factors Influencing Win</strong>

          <ProbabilityFactorsTrendChart
            data={formattedProbFacts}
            repProb={props.currentRow.repProbability}
          />
        </Box>
      </Box>
    </>
  );
};

export default Card;
