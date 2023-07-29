import React from "react";
import seasons from "../data/mfc-matches.json";
import goalscorers from "../data/mfc-goals.json";

import ShowTabs from "../components/football/ShowTabs";
import { Tabs, Tab } from "../components/react/tabs";

export default function Football() {
  return (
    <>
      <h1>Motherwell FC</h1>

      <Tabs>
        {seasons.map((season, key) => {
          return (
            <Tab key={key} label={season.season} tabName={season.season}>
              <ShowTabs
                matches={season.details}
                goals={goalscorers[key].details}
              />
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
}
