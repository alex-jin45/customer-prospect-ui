const formatProbabilityHistory = (
  unformattedProbHist,
  currentPxProb,
  currentRepProb
) => {
  let formattedProbabilityHistory = [
    {
      id: `Rep`,
      color: "hsl(316, 70%, 50%)",
      data: []
    },
    {
      id: `PX`,
      color: "hsl(337, 70%, 50%)",
      data: []
    }
  ];

  if (!unformattedProbHist) return formattedProbabilityHistory;
  for (let index = 0; index < unformattedProbHist.length; index++) {
    const daysAgo = String(unformattedProbHist[index].daysAgo);
    const pxProb = Number(unformattedProbHist[index].pilytixProb);
    const repProb = Number(unformattedProbHist[index].repProb);

    formattedProbabilityHistory[0].data.push({ x: daysAgo, y: repProb });
    formattedProbabilityHistory[1].data.push({ x: daysAgo, y: pxProb });
  }
  formattedProbabilityHistory[0].data.push({ x: "0", y: currentRepProb });
  formattedProbabilityHistory[1].data.push({ x: "0", y: currentPxProb });

  return formattedProbabilityHistory;
};

export default formatProbabilityHistory;
