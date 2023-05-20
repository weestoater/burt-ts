import React from "react";
import AboutContent from "../components/about/AboutContent";

export default function About() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h1 className="visually-hidden">About</h1>
          <AboutContent />
        </div>
        <div className="col-sm-6"></div>
      </div>
    </>
  );
}
