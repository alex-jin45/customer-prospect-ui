import React from "react";
import { useTheme } from "@mui/material";
import "./styles.css";

import { ResponsiveBar } from "@nivo/bar";

const ProbabilityFactorsTrendChart = (props) => {
  const keys = Object.keys(props.data[0]).slice(1);
  keys.push("Total");
  console.log(keys);
  const data = props.data;
  return (
    <div className="chart">
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy="weight_value"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.1}
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "red_blue" }}
        colorBy="id"
        defs={[]}
        fill={[]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.9"]]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 10,
          tickPadding: 6,
          tickRotation: 0,
          legend: "weight_value",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -60
        }}
        enableGridX={true}
        enableGridY={false}
        labelSkipWidth={11}
        labelSkipHeight={17}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]]
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: -4,
            itemsSpacing: 2,
            itemWidth: 96,
            itemHeight: 31,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        isInteractive={true}
        tooltip={function () {}}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in weight_value: " + e.indexValue
          );
        }}
      />
    </div>
  );
};

export default ProbabilityFactorsTrendChart;
