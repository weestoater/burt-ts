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
        type: "column",
        yKey: "goals",
        xKey: "player",
        stacked: false,
      },
    ],
    padding: {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    },
    legend: {
      position: "bottom",
      spacing: 15,
    },
    theme: {},
  };
  return (
    <div className="goal-scorers">
      {_goalscorers !== null && <AgChartsReact options={_options} />}
    </div>
  );
}
