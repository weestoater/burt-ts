import React from "react";
import AboutContent from "../components/about/AboutContent";
import BioContent from "../components/about/BioContent";

export default function About() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 data-testid="pagetitle">About</h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <AboutContent />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <BioContent />
        </div>
      </div>
    </>
  );
}
