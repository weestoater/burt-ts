import React, { useState } from "react";

import { AgChartsReact } from "ag-charts-react";

export default function ShowSeasonGoalScorers(props: any) {
  const [goals, setGoals] = useState(0);
  const [player, setPlayer] = useState("");

  // function filterItems(_goals: number, _player: string) {
  //   setGoals(_goals);
  //   setPlayer(_player);

  //   if (goals !== 0 && player !== "") {
  //     //  console.log("Goals -> " + _goals + " | Player -> " + _player);
  //     document.getElementById("modalBtn")?.click();
  //   }
  // }

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
        // listeners: {
        //   nodeClick: (event: any) => {
        //     var datum = event.datum;

        //     filterItems(datum[event.angleKey], datum[event.calloutLabelKey]);
        //   },
        // },
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
      spacing: 20,
    },
    theme: {},
  };

  return (
    <>
      <div className="goal-scorers">
        {_goalscorers !== null && <AgChartsReact options={_options} />}
      </div>

      <button
        id="modalBtn"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#playerModal"
      >
        .
      </button>

      <div
        className="modal fade"
        id="playerModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Player details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Player chosen is <b>{player}</b>
              </p>
              <p>
                Number of goals they scored is <b>{goals}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
