export const formatProbabilityFactors = (factsIncWin, factsDecWin) => {
  let formattedProbFacts = [
    [
      {
        id: "Factors"
        // "product": 1,
      },
      {
        id: "Total"
        // "Total": 17,
      }
    ],
    [
      {} // "product": {"message: "text, "description": "weak Positive" }
    ]
  ];

  const greenAccent = {
    0: "#DCF5EF",
    100: "#CCF1E7",
    200: "#ACE8D9",
    300: "#8CE0CA",
    400: "#6CD7BB",
    500: "#4CCEAC",
    600: "#31B190",
    700: "#24856C",
    800: "#185948",
    900: "#0C2D25"
  };
  const redAccent = {
    0: "#F9E4E3",
    100: "#F6D3D2",
    200: "#EFB2B0",
    300: "#E9918E",
    400: "#E2706C",
    500: "#DB4F4A",
    600: "#C62D27",
    700: "#97221E",
    800: "#681815",
    900: "#390D0B"
  };

  let totalWeight = 0;
  if (factsIncWin) {
    for (let i = 0; i < factsIncWin.length; i++) {
      const name = factsIncWin[i].name;
      const weight = factsIncWin[i].weight.value; // let source = {};// source[name] = weight;
      Object.assign(formattedProbFacts[0][0], { [name]: weight });
      Object.assign(formattedProbFacts[0][0], {
        [name + "Color"]: greenAccent[i * 100]
      });

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
      Object.assign(formattedProbFacts[0][0], {
        [name + "Color"]: redAccent[i * 100]
      });

      const message = factsDecWin[i].message;
      const description = factsDecWin[i].weight.description;

      Object.assign(formattedProbFacts[1][0], {
        [name]: { message: message, description: description }
      });

      totalWeight = totalWeight + weight;
    }
  }

  Object.assign(formattedProbFacts[0][1], { Total: totalWeight });
  Object.assign(formattedProbFacts[1][0], {
    Total: { message: "", description: "" }
  });

  console.log("all my formatted factors ");
  console.log(formattedProbFacts);
  return formattedProbFacts;
};

export default formatProbabilityFactors;
