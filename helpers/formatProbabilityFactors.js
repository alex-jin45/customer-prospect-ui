export const formatProbabilityFactors = (factsIncWin, factsDecWin) => {
  let formattedProbFacts = [
    [
      {
        weight_value: "Factors"
        // "product": 1,
      },
      {
        weight_value: "Total"
        // "Total": 17,
      }
    ],
    [
      {} // "product": {"message: "text, "description": "weak Positive" }
    ]
  ];

  let totalWeight = 0;
  if (factsIncWin) {
    for (let i = 0; i < factsIncWin.length; i++) {
      const name = factsIncWin[i].name;
      const weight = factsIncWin[i].weight.value; // let source = {};// source[name] = weight;
      Object.assign(formattedProbFacts[0][0], { [name]: weight });

      const message = factsIncWin[i].message;
      const description = factsIncWin[i].weight.description;
      Object.assign(formattedProbFacts[1][0], {
        [name]: { message: message, description: description }
      });

      totalWeight = totalWeight + weight;
    }
  }

  if (factsDecWin) {
    for (let i = 0; i < factsDecWin.length; i++) {
      const name = factsDecWin[i].name;
      const weight = factsDecWin[i].weight.value; //let source = {};//source[name] = weight;
      Object.assign(formattedProbFacts[0][0], { [name]: weight });
      totalWeight = totalWeight + weight;
    }
  }

  Object.assign(formattedProbFacts[0][1], { Total: totalWeight });

  // console.log("all my formatted factors ");
  // console.log(formattedProbFacts);
  return formattedProbFacts;
};

export default formatProbabilityFactors;
