import React from "react";
import { useTheme } from "@mui/material";
import "./styles.css";
import { tokens } from "../public/theme";

import { ResponsiveLine } from "@nivo/line";

const ProbabilityHistoryChart = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = props.data;

  return (
    <div className="chartHistory">
      <ResponsiveLine
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
        margin={{ top: 12, right: 20, bottom: 60, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Days Ago",
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          tickValues: 5,
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
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          return (
            <div
              style={{
                background: "#222222",
                padding: "9px 12px",
                textAlign: "left",
                width: "120px",
                borderRadius: "10px"
              }}
            >
              {slice.points.map((point) => (
                <div
                  key={point.id}
                  style={{
                    color: point.serieColor,
                    padding: "3px 0"
                  }}
                >
                  <div>
                    <strong>{point.data.xFormatted}</strong> Days Ago
                  </div>
                  <div>
                    <strong> {point.data.yFormatted.replace(/^0+/, "")}</strong>{" "}
                    Probability{" "}
                  </div>
                </div>
              ))}
            </div>
          );
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 51,
            itemsSpacing: 7,
            itemDirection: "left-to-right",
            itemWidth: 45,
            itemHeight: 30,
            itemOpacity: 1,
            symbolSize: 20,
            symbolShape: "circle",
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
