import React from "react";

import { AgChartsReact } from "ag-charts-react";

export default function ShowSeasonGoalScorers(props: any) {
  const _goalscorers: any = props.goalscorers;

  let _options: any = {
    data: _goalscorers,
    title: {
      enabled: true,
      text: "Goal Scorers",
    },
    autoSize: true,
    series: [
      {
        type: "pie",
        angleKey: "goals",
        calloutLabelKey: "player",
        strokeWidth: 5,
        strokeOpacity: 0.5,
        sectorLabelKey: "goals",
        sectorLabel: {
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
        },
        innerRadiusOffset: -70,
        innerCircle: {
          fill: "#ececec",
        },
      },
    ],
    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 10,
    },
    legend: {
      position: "bottom",
      spacing: 25,
    },
    theme: {},
  };
  return (
    <div className="goal-scorers">
      {_goalscorers !== null && <AgChartsReact options={_options} />}
    </div>
  );
}
