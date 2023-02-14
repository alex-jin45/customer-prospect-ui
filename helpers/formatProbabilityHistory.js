const formatProbabilityHistory = (unformattedProbHist) => {
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

  for (let index = 0; index < unformattedProbHist.length; index++) {
    const daysAgo = unformattedProbHist[index].daysAgo;
    let pilytixProb = unformattedProbHist[index].pilytixProb;
    let repProb = unformattedProbHist[index].repProb;
    formattedProbabilityHistory[0].data.push({ x: daysAgo, y: pilytixProb });
    formattedProbabilityHistory[1].data.push({ x: daysAgo, y: repProb });
  }
  return formattedProbabilityHistory;
};

export default formatProbabilityHistory;
