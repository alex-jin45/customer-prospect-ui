import React from "react";
import { useTheme } from "@mui/material";
import "./styles.css";
import { tokens } from "./theme";

import { ResponsiveBar } from "@nivo/bar";

const ProbabilityFactorsTrendChart = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const keys = Object.keys(props.data[0]).slice(1);
  keys.push("Total");

  const data = props.data;

  return (
    <div className="chart">
      <ResponsiveBar
        data={data}
        theme={{
          textColor: colors.grey[100],
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100]
              }
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1
              }
            },
            text: {
              fill: colors.grey[100]
            }
          },
          legends: {
            text: {
              fill: colors.grey[100]
            }
          }
        }}
        keys={keys}
        indexBy="weight_value"
        margin={{ top: 50, right: 150, bottom: 50, left: 50 }}
        padding={0.1}
        layout="vertical"
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
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Factors and Weights Influencing Win",
          legendPosition: "middle",
          legendOffset: 40
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 10,
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
            translateX: 85,
            translateY: 0,
            itemsSpacing: 0,
            itemWidth: 80,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.95,
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
        tooltip={({ id, value, color }) => (
          <div
            style={{
              padding: 12,
              color,
              background: "#222222"
            }}
          >
            <span>Look, I'm custom :)</span>
            <br />
            <strong>
              {id}: {value}
            </strong>
          </div>
        )}
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
