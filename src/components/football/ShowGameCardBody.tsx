import React from "react";

import ShowOpponentsLeague from "./components/ShowOpponentsLeague";
import ShowCards from "./components/ShowCards";
import ShowGoals from "./components/ShowGoals";
import ShowVideoLink from "./components/ShowVideoLInk";
import ShowMatchNotes from "./components/ShowMatchNotes";

export default function ShowGameCardBody(props: any) {
  const _opposition: string = props.opposition;
  const _league: string = props.league ? props.league : "SPFL";
  const _cards: any = props.cards;
  const _goals: any = props.goals;
  const _video: string = props.video;
  const _notes: string = props.notes;

  return (
    <>
      {_opposition !== undefined && _opposition !== null && (
        <ShowOpponentsLeague opposition={_opposition} league={_league} />
      )}

      {_cards !== undefined && _cards !== null && <ShowCards cards={_cards} />}

      {_goals !== undefined && _goals !== null && <ShowGoals goals={_goals} />}

      {_video !== undefined && _video !== null && (
        <ShowVideoLink video={_video} />
      )}

      {_notes !== undefined && _notes !== null && (
        <ShowMatchNotes notes={_notes} />
      )}
    </>
  );
}
