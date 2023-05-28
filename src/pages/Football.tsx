import React from "react";
import seasons from "../data/mfc-matches.json";

import WinLoseDraw from "../components/football/WinLoseDraw";
import ShowVideoLink from "../components/football/ShowVideoLInk";
import ShowMatchNotes from "../components/football/ShowMatchNotes";
import ShowCards from "../components/football/ShowCards";
import ShowGoals from "../components/football/ShowGoals";

export default function Football() {
  return (
    <>
      <h1>Motherwell FC</h1>

      <div className="row">
        {seasons.map((season: any) => {
          return (
            <div key={season.season} className="col-sm-4">
              <h2>{season.season}</h2>
              {season.details.map((game: any) => {
                return (
                  <div className="card mb-3" key={game.date}>
                    <div className="card-header text-center">
                      <small className="float-start">{game.date}</small>
                      <span className="scores">
                        {game.venue === "Home" ? (
                          <>
                            <b>{game.scored}</b> - {game.conceded}
                          </>
                        ) : (
                          <>
                            {game.conceded} - <b>{game.scored}</b>
                          </>
                        )}
                      </span>
                      <span className="float-end">
                        {game.venue}
                        <br />
                        <WinLoseDraw
                          scored={game.scored}
                          conceded={game.conceded}
                        />
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Played: <b>{game.opposition}</b>
                        {game.league === "" ||
                        game.league === null ||
                        game.league === undefined ? (
                          <span>
                            {" "}
                            in the <b>SPFL</b>
                          </span>
                        ) : (
                          <span>
                            {" "}
                            in the <b> {game.league}</b>
                          </span>
                        )}
                      </p>
                      {game.cards !== undefined && game.cards !== null && (
                        <ShowCards cards={game.cards} />
                      )}
                      {game.goals !== undefined && game.goals !== null && (
                        <ShowGoals goals={game.goals} />
                      )}
                      {game.video !== undefined && game.video !== null && (
                        <ShowVideoLink video={game.video} />
                      )}
                      {game.notes !== undefined && game.notes !== null && (
                        <ShowMatchNotes notes={game.notes} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
