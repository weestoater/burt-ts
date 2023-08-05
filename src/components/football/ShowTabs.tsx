import React from "react";

import ShowGameCardHeader from "./ShowGameCardHeader";
import ShowGameCardBody from "./ShowGameCardBody";
import ShowSeasonGoalScorers from "./ShowSeasonGoalScorers";

export default function ShowTabs(props: any) {
  const matches: any = props.matches;
  const goals: any = props.goals;

  return (
    <div className="tabcontent">
      <div className="row">
        <div className="col-sm-6 pt-2">
          {matches.map((game: any, index: number) => {
            return (
              <div className="card mb-3" key={game.date}>
                <ShowGameCardHeader
                  date={game.date}
                  venue={game.venue}
                  scored={game.scored}
                  conceded={game.conceded}
                />
                <div className="card-body">
                  <ShowGameCardBody
                    opposition={game.opposition}
                    league={game.league}
                    cards={game.cards}
                    goals={game.goals}
                    video={game.video}
                    notes={game.notes}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-sm-6 pt-2">
          <ShowSeasonGoalScorers goalscorers={goals} />
        </div>
        <div className="col-sm-12 mb-4">
          <a href="#top">Back to top</a>
        </div>
      </div>
    </div>
  );
}
