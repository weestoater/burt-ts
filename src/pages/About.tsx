import React from "react";
import AboutContent from "../components/about/AboutContent";
import BioContent from "../components/about/BioContent";

export default function About() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1>About</h1>
        </div>
        <div className="col-sm-6">
          <AboutContent />
        </div>
        <div className="col-sm-6">
          <BioContent />
        </div>
      </div>
    </>
  );
}
