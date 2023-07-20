import React from "react";

import ShowGameCardHeader from "./ShowGameCardHeader";
import ShowGameCardBody from "./ShowGameCardBody";
import ShowSeasonGoalScorers from "./ShowSeasonGoalScorers";

export default function ShowTabs(props: any) {
  const matches: any = props.matches;
  const goals: any = props.goals;

  return (
    <>
      <ul className="nav nav-pills" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="twentyfour-tab"
            data-bs-toggle="tab"
            data-bs-target="#twentyfour"
            type="button"
            role="tab"
            aria-controls="2023-24"
            aria-selected="true"
          >
            2023-24
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="twentythree-tab"
            data-bs-toggle="tab"
            data-bs-target="#twentythree"
            type="button"
            role="tab"
            aria-controls="2022-23"
            aria-selected="false"
          >
            2022-23
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="twentytwo-tab"
            data-bs-toggle="tab"
            data-bs-target="#twentytwo"
            type="button"
            role="tab"
            aria-controls="twentytwo"
            aria-selected="false"
          >
            2021-22
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="twentyone-tab"
            data-bs-toggle="tab"
            data-bs-target="#twentyone"
            type="button"
            role="tab"
            aria-controls="twentyone"
            aria-selected="false"
          >
            2020-21
          </button>
        </li>
      </ul>
      <hr />
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="twentyfour"
          role="tabpanel"
          aria-labelledby="twentyfour-tab"
        >
          <div className="row">
            <div className="col-sm-6 pt-2">
              {matches[0].details.map((game: any, index: number) => {
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
              <ShowSeasonGoalScorers goalscorers={goals[0].details} />
            </div>
            <div className="col-sm-12 mb-4">
              <a href="#top">Back to top</a>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="twentythree"
          role="tabpanel"
          aria-labelledby="twentythree-tab"
        >
          <div className="row">
            <div className="col-sm-6 pt-2">
              {matches[1].details.map((game: any, index: number) => {
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
              <ShowSeasonGoalScorers goalscorers={goals[1].details} />
            </div>
            <div className="col-sm-12 mb-4">
              <a href="#top">Back to top</a>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="twentytwo"
          role="tabpanel"
          aria-labelledby="twentytwo-tab"
        >
          <div className="row">
            <div className="col-sm-6 pt-2">
              {matches[2].details.map((game: any, index: number) => {
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
              <ShowSeasonGoalScorers goalscorers={goals[2].details} />
            </div>
            <div className="col-sm-12 mb-4">
              <a href="#top">Back to top</a>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="twentyone"
          role="tabpanel"
          aria-labelledby="twentyone-tab"
        >
          <div className="row">
            <div className="col-sm-6 pt-2">
              {matches[3].details.map((game: any, index: number) => {
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
              <ShowSeasonGoalScorers goalscorers={goals[3].details} />
            </div>
            <div className="col-sm-12 mb-4">
              <a href="#top">Back to top</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
