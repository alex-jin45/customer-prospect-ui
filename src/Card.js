import React from "react";
import ProbabilityHistoryChart from "./ProbabilityHistoryChart";
import formatProbabilityHistory from "../helpers/formatProbabilityHistory";
const Card = (props) => {
  console.log("inside the card #" + props.currentRow.oppId);
  console.log(
    "1st probability hisroty days ago " +
      props.currentRow.probabilityHistory[0].daysAgo
  );

  const handleClick = () => {
    props.setCardShown(!props.cardShown);
  };

  const formattedProbHist = formatProbabilityHistory(
    props.currentRow.probabilityHistory
  );
  return (
    <div >
      <div>Opp # {props.currentRow.oppId}</div>
      <div>Stage {props.currentRow.stage}</div>
      <div>Rep Prob {props.currentRow.repProbability}</div>
      <div>PX Prob {props.currentRow.pilytixProbability}</div>
      <div>PX Tier {props.currentRow.pilytixTier}</div>
      <div>Amount ${props.currentRow.amount}</div>
      <div>Product {props.currentRow.product}</div>
      <div>Sales Rep{props.currentRow.salesRepName}</div>
      <ProbabilityHistoryChart data={formattedProbHist} />

      <button onClick={handleClick}>Close</button>
    </div>
  );
};

export default Card;
