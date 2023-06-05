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
      <div className="matchdate float-start">
        <small>{_date}</small>
      </div>
      <div className="scores">
        <ShowScores venue={_venue} scored={_scored} conceded={_conceded} />
      </div>
      <div className="matchresult float-end">
        {_venue}
        <br />
        <WinLoseDraw scored={_scored} conceded={_conceded} />
      </div>
    </div>
  );
}
