import { tokens } from "../public/theme";
import { useTheme } from "@mui/material";
export const formatProbabilityFactors = (factsIncWin, factsDecWin) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let formattedProbFacts = [
    [
      {
        id: "Factors"
        // "product": 1,
        // "productColor: "red"
      },
      {
        id: "Total"
        // "Total": 17,
        //"TotalColor: "blue"
      }
    ],
    [
      {} // "product": {"message: "text, "description": "weak Positive" }
    ],
    { keys: [] }
  ];

  let keys = [];
  let totalWeight = 0;
  if (factsIncWin) {
    for (let i = 0; i < factsIncWin.length; i++) {
      const name = factsIncWin[i].name;
      keys.push(name);
      const weight = factsIncWin[i].weight.value;
      Object.assign(formattedProbFacts[0][0], { [name]: weight });
      Object.assign(formattedProbFacts[0][0], {
        [name + "Color"]: colors.greenAccent[i * 100]
      });

      const message = factsIncWin[i].message;
      const description = factsIncWin[i].weight.description;
      const winEffect = "Factor Increasing Win";

      Object.assign(formattedProbFacts[1][0], {
        [name]: { message: message, description: description, winEffect }
      });

      totalWeight = totalWeight + weight;
    }
  }

  if (factsDecWin) {
    for (let i = 0; i < factsDecWin.length; i++) {
      const name = factsDecWin[i].name;
      keys.push(name);
      const weight = factsDecWin[i].weight.value;
      Object.assign(formattedProbFacts[0][0], { [name]: weight });
      Object.assign(formattedProbFacts[0][0], {
        [name + "Color"]: colors.redAccent[i * 100]
      });

      const message = factsDecWin[i].message;
      const description = factsDecWin[i].weight.description;
      const winEffect = "Factor Decreasing Win";

      Object.assign(formattedProbFacts[1][0], {
        [name]: {
          message: message,
          description: description,
          winEffect: winEffect
        }
      });

      totalWeight = totalWeight + weight;
    }
  }

  Object.assign(formattedProbFacts[0][1], { Total: totalWeight });

  if (totalWeight > 0) var totalColor = colors.greenAccent["DEFAULT"];
  if (totalWeight <= 0) totalColor = colors.redAccent["DEFAULT"];
  Object.assign(formattedProbFacts[0][1], { TotalColor: totalColor });

  Object.assign(formattedProbFacts[1][0], {
    Total: { message: "", description: "", winEffect: "" }
  });

  keys.push("Total");
  Object.assign(formattedProbFacts[2], { keys: keys });

  return formattedProbFacts;
};

export default formatProbabilityFactors;
