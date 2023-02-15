import React from "react";
import { useTheme } from "@mui/material";
import "./styles.css";
import { tokens } from "./theme";

import { ResponsiveLine } from "@nivo/line";

const ProbabilityHistoryChart = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="chart">
      <ResponsiveLine
        data={props.data}
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
        margin={{ top: 10, right: 160, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Time Elapsed [Days]",
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 0,
          tickRotation: 1,
          legend: "Probability",
          legendOffset: -40,
          legendPosition: "middle"
        }}
        enableGridX={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 85,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.95,
            symbolSize: 20,
            symbolShape: "square",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default ProbabilityHistoryChart;
