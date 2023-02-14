import React from "react";
import ProbabilityHistoryChart from "./ProbabilityHistoryChart";
import formatProbabilityHistory from "./helpers/formatProbabilityHistory";
import formatProbabilityFactors from "./helpers/formatProbabilityFactors";
import ProbabilityFactorsTrendChart from "./ProbabilityFactorsTrendChart";
import { ColorModeContext, tokens } from "./theme";
import { useContext } from "react";
import { Box, useTheme } from "@mui/material";

const Card = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleClick = () => {
    props.setCardShown(!props.cardShown);
  };

  const formattedProbHist = formatProbabilityHistory(
    props.currentRow.probabilityHistory
  );

  const formattedProbFacts = formatProbabilityFactors(
    props.currentRow.pilytixFactorsIncreasingWin,
    props.currentRow.pilytixFactorsDecreasingWin
  );

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" m={10}>
        <div>Opp # {props.currentRow.oppId} </div>
        <div>Stage {props.currentRow.stage}</div>
        <div>PX Tier {props.currentRow.pilytixTier}</div>
        <div>Amount ${props.currentRow.amount}</div>
        <div>Product {props.currentRow.product}</div>
        <div>Sales Rep{props.currentRow.salesRepName}</div>

        <div>Rep Prob {props.currentRow.repProbability}</div>
        <div>PX Prob {props.currentRow.pilytixProbability}</div>
      </Box>

      <Box m={10}>
        <ProbabilityHistoryChart data={formattedProbHist} />
        <ProbabilityFactorsTrendChart data={formattedProbFacts} />
      </Box>
      <button onClick={handleClick}>Close</button>
    </Box>
  );
};

export default Card;
