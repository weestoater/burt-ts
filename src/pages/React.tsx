import React from "react";

import RandomUsersPost from "../components/react/RandomUserPost";
import ReactHooksPost from "../components/react/ReactHooksPost";
import NextThingsPost from "../components/react/NextThingsPost";

export default function ReactPage() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1>React</h1>
        </div>
        <NextThingsPost />
        <ReactHooksPost />
        <RandomUsersPost />
      </div>
    </>
  );
}
