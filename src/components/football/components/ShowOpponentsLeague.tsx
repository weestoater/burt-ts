import React from "react";

export default function ShowOpponentsLeague(props: any) {
  const _opposition: string = props.opposition;
  const _league: string = props.league;

  return (
    <p>
      Played: <b>{_opposition}</b> in the <b>{_league}</b>
    </p>
  );
}
