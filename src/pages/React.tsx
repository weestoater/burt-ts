import React from "react";

import RandomUsersPost from "../components/react/RandomUserPost";
import ReactHooksPost from "../components/react/ReactHooksPost";

export default function ReactPage() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1>React</h1>
        </div>
        <ReactHooksPost />
        <RandomUsersPost />
      </div>
    </>
  );
}
