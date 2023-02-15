export const formatProbabilityFactors = (factIncWin, factDecWin) => {
  let formattedProbabilityFactors = [
    {
      weight_value: "Factors"
      // "product": 1,
    },
    {
      weight_value: "Total"
      // "Total": 17,
    }
  ];

  let totalWeight = 0;
  if (factIncWin) {
    for (let i = 0; i < factIncWin.length; i++) {
      const name = factIncWin[i].name;
      const weight = factIncWin[i].weight.value;
      let source = {};
      source[name] = weight;
      Object.assign(formattedProbabilityFactors[0], source);
      totalWeight = totalWeight + weight;
    }
  }

  if (factDecWin) {
    for (let i = 0; i < factDecWin.length; i++) {
      const name = factDecWin[i].name;
      const weight = factDecWin[i].weight.value;
      let source = {};
      source[name] = weight;
      Object.assign(formattedProbabilityFactors[0], source);
      totalWeight = totalWeight + weight;
    }
  }

  Object.assign(formattedProbabilityFactors[1], { Total: totalWeight });

  console.log("all my formatted factors ");
  console.log(formattedProbabilityFactors);
  return formattedProbabilityFactors;
};

export default formatProbabilityFactors;
