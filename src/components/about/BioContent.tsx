import React from "react";

import BusterPic from "../../assets/buster.jpg";

export default function BioContent() {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <i className="bi bi-wrench-adjustable-circle" /> who is burtware ?
      </div>
      <div className="card-body">
        <p>
          I am a Scottish Web Developer, working in Glasgow, UK and living just
          outside the fine city.
        </p>
        <p>
          I'm a father of two 'lovely children' and a husband to my long
          suffering wife. We have a brilliant dog called Buster and we love him
          to bits.
        </p>
        <p className="text-center">
          <img className="img-thumbnail" src={BusterPic} alt="" />
        </p>
        <p>
          When not working or ferrying my kids to one of their many clubs, I
          like to tinker with this website, listen to rubbish music and watch
          weird and wonderful films. I occassionaly make it along to see
          Motherwell FC too.
        </p>
      </div>
    </div>
  );
}
