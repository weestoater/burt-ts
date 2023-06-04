import React from "react";
import seasons from "../data/mfc-matches.json";
import goalscorers from "../data/mfc-goals.json";

import ShowTabs from "../components/football/ShowTabs";

export default function Football() {
  return (
    <>
      <h1>Motherwell FC</h1>

      <ShowTabs matches={seasons} goals={goalscorers} />
    </>
  );
}
