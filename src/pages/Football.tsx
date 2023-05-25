import React from "react";
import seasons from "../data/mfc-matches.json";

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
                      <b>{game.scored}</b> - {game.conceded}
                      <span className="float-end">{game.venue}</span>
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
                        <>
                          <small>Cards:</small>
                          <ul>
                            {game.cards.map((card: any, index: number) => {
                              return (
                                <li key={index}>
                                  <div className={`cards ${card.card}`}></div>{" "}
                                  {card.mins}mins' &middot; {card.player}
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      )}
                      {game.goals !== undefined && game.goals !== null && (
                        <>
                          <small>Goals:</small>
                          <ul>
                            {game.goals.map((goal: any, index: number) => {
                              return (
                                <li key={index}>
                                  {goal.player} @ {goal.mins} mins
                                </li>
                              );
                            })}
                          </ul>
                        </>
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
