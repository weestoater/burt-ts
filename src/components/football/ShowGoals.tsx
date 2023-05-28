import React from "react";

export default function ShowGoals(props: any) {
  const _goals = props.goals;
  return (
    <>
      <small>Goals:</small>
      <ul className="no-bullets">
        {_goals.map((goal: any, index: number) => {
          return (
            <li key={index}>
              {goal.player} @ {goal.mins} mins
            </li>
          );
        })}
      </ul>
    </>
  );
}
