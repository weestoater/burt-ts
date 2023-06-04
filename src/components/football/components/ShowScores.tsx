import React from "react";

export default function ShowScores(props: any) {
  const _venue: string = props.venue;
  const _scored: number = props.scored;
  const _conceded: number = props.conceded;
  return (
    <>
      {_venue === "Home" ? (
        <>
          <b>{_scored}</b> - {_conceded}
        </>
      ) : (
        <>
          {_conceded} - <b>{_scored}</b>
        </>
      )}
    </>
  );
}
