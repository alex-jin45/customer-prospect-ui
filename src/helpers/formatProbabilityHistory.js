const formatProbabilityHistory = (
  unformattedProbHist,
  currentPxProb,
  currentRepProb
) => {
  let formattedProbabilityHistory = [
    {
      id: "pilytixProb",
      color: "hsl(337, 70%, 50%)",
      data: []
    },
    {
      id: "repProb",
      color: "hsl(316, 70%, 50%)",
      data: []
    }
  ];

  if(!unformattedProbHist) return formattedProbabilityHistory
  for (let index = 0; index < unformattedProbHist.length; index++) {
    const daysAgo = unformattedProbHist[index].daysAgo;
    let pilytixProb = unformattedProbHist[index].pilytixProb;
    let repProb = unformattedProbHist[index].repProb;
    formattedProbabilityHistory[0].data.push({ x: daysAgo, y: pilytixProb });
    formattedProbabilityHistory[1].data.push({ x: daysAgo, y: repProb });
  }
  formattedProbabilityHistory[0].data.push({ x: 0, y: currentPxProb });
  formattedProbabilityHistory[1].data.push({ x: 0, y: currentRepProb });

  //console.log(formattedProbabilityHistory);
  return formattedProbabilityHistory;
};

export default formatProbabilityHistory;
