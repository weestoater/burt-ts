import React from "react";
import WinLoseDraw from "./components/WinLoseDraw";
import ShowScores from "./components/ShowScores";

export default function ShowGameCardHeader(props: any) {
  const _date: string = props.date;
  const _venue: string = props.venue;
  const _scored: number = props.scored;
  const _conceded: number = props.conceded;

  return (
    <div className="card-header text-center">
      <small className="float-start">{_date}</small>
      <span className="scores">
        <ShowScores venue={_venue} scored={_scored} conceded={_conceded} />
      </span>
      <span className="float-end">
        {_venue}
        <br />
        <WinLoseDraw scored={_scored} conceded={_conceded} />
      </span>
    </div>
  );
}
