import React from "react";

import { useTheme } from "@mui/material";
import { tokens } from "../public/theme";
//import "../styles/globals.css";

import { ResponsiveBar } from "@nivo/bar";

const ProbabilityFactorsTrendChart = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = props.data[0];
  const keys = props.data[2].keys;

  return (
    <div className="chartFactors">
      <ResponsiveBar
        label="id"
        data={data}
        theme={{
          annotations: {
            text: {
              fontSize: 13,
              fill: "#BLACK",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1
            }
          },
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
        indexBy="id"
        margin={{ top: 67, right: 20, bottom: 0, left: 60 }}
        padding={0.1}
        layout="vertical"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        //colors={{ scheme: "purples" }}
        colors={({ id, data }) => String(data[`${id}Color`])}
        colorBy="id"
        defs={[]}
        fill={[]}
        markers={[
          {
            axis: "y",
            value: 0,
            lineStyle: { stroke: colors.grey[100], strokeWidth: 1 }
          }
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.9"]]
        }}
        axisTop={{
          tickSize: 30,
          tickPadding: 5,
          tickRotation: 0,
          //legend: "Factors and Weights Influencing Win",
          legendPosition: "middle",
          legendOffset: 40
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Weight",
          legendPosition: "middle",
          legendOffset: -40
        }}
        axisRight={null}
        axisBottom={null}
        enableGridX={true}
        enableGridY={false}
        labelSkipWidth={11}
        labelSkipHeight={17}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]]
        }}
        isInteractive={true}
        tooltip={({ id, value, color, scheme }) => (
          <div
            style={{
              padding: 12,
              color,
              background: "#222222",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "300px",
              borderRadius: "10px"
            }}
          >
            <table>
              <tr>
                <td align="left">
                  <>{props.data[1][0][id].winEffect}</>
                </td>
                <td align="left">
                  <strong>{id}</strong>
                </td>
              </tr>
              <tr>
                <td align="left">
                  Factor Weight <strong>{value}</strong>
                </td>
                <td align="left">
                  <strong>{props.data[1][0][id].description}</strong>
                </td>
              </tr>
              <tr>
                <td colspan="2" align="left">
                  <strong>{props.data[1][0][id].message}</strong>
                </td>
              </tr>
            </table>
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
