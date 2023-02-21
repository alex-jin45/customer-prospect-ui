// module not currently used but can help with positioning legends on nivo chart in future

const findMaxProbability = (probHist) => {
    let valuesArr = [];
    for (let index = 0; index < probHist[0].data.length; index++) {
      const value1 = probHist[0].data[index].y;
      const value2 = probHist[1].data[index].y;
  
      valuesArr.push(value1, value2);
    }
  
    const maxProbabilityValue = Math.max(...valuesArr);
    return maxProbabilityValue;
  };
  
  export default findMaxProbability;
  