import React from "react";
import ProbabilityHistoryChart from "./ProbabilityHistoryChart";
import formatProbabilityHistory from "./helpers/formatProbabilityHistory";
import formatProbabilityFactors from "./helpers/formatProbabilityFactors";
import ProbabilityFactorsTrendChart from "./ProbabilityFactorsTrendChart";
import { ColorModeContext, tokens } from "./theme";
import { useContext } from "react";
import { Box, Grid, div, useTheme } from "@mui/material";

const Card = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

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
    <Box m={2}>
      <Box display="flex" justifyContent="space-between">
        <Grid container spacing={0} textAlign="left">
          <Grid item xs={6}>
            <div>Card Number:</div>
          </Grid>
          <Grid item xs={6}>
            <div>{props.currentRow.oppId}</div>
          </Grid>
          <Grid item xs={6}>
            <div>Opportunity Stage</div>
          </Grid>
          <Grid item xs={6}>
            <div>{props.currentRow.stage}</div>
          </Grid>
          <Grid item xs={6}>
            <div>Amount</div>
          </Grid>
          <Grid item xs={6}>
            <div>${props.currentRow.amount}</div>
          </Grid>
        </Grid>

        <Grid container spacing={0} textAlign="left">
          <Grid item xs={12} textAlign="right">
            <div>
              <button onClick={handleClick}>Close</button>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div>{props.currentRow.oppName}</div>
          </Grid>
          <Grid item xs={6}>
            <div>Product: </div>
          </Grid>
          <Grid item xs={6}>
            <div>{props.currentRow.product}</div>
          </Grid>
          <Grid item xs={6}>
            <div>Sales Representative:</div>
          </Grid>
          <Grid item xs={6}>
            <div>{props.currentRow.salesRepName} </div>
          </Grid>
        </Grid>
      </Box>
      Probability History Current Representative Probability
      {props.currentRow.repProbability}
      Current Pilytix Probability
      {props.currentRow.pilytixProbability}
      <ProbabilityHistoryChart data={formattedProbHist} />
      <ProbabilityFactorsTrendChart data={formattedProbFacts} />
    </Box>
  );
};

export default Card;
