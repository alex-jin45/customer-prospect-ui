import React from "react";
import ProbabilityHistoryChart from "./ProbabilityHistoryChart";
import formatProbabilityHistory from "../helpers/formatProbabilityHistory";
import formatProbabilityFactors from "../helpers/formatProbabilityFactors";
import ProbabilityFactorsTrendChart from "./ProbabilityFactorsTrendChart";

const Card = (props) => {
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
    <div>
      <div>Opp # {props.currentRow.oppId}</div>
      <div>Stage {props.currentRow.stage}</div>
      <div>Rep Prob {props.currentRow.repProbability}</div>
      <div>PX Prob {props.currentRow.pilytixProbability}</div>
      <div>PX Tier {props.currentRow.pilytixTier}</div>
      <div>Amount ${props.currentRow.amount}</div>
      <div>Product {props.currentRow.product}</div>
      <div>Sales Rep{props.currentRow.salesRepName}</div>
      <ProbabilityHistoryChart data={formattedProbHist} />
      <ProbabilityFactorsTrendChart data={formattedProbFacts} />

      <button onClick={handleClick}>Close</button>
    </div>
  );
};

export default Card;
