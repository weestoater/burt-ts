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
          I'm a father of two amazing kids and a husband to my <b>very</b> long
          suffering wife. We have an adorable dog called Buster and he is the
          absolutely best boy - loved to bits.
        </p>
        <p className="text-center">
          <img className="img-thumbnail" src={BusterPic} alt="" />
        </p>
        <p>
          When not working or ferrying my kids to one of their many clubs, I
          like to tinker with code / websites; listen to rubbish music; watch
          weird and wonderful stuff on various streaming services. I
          occassionaly make it along to see Motherwell FC too and have been know
          to strum a tune on the guitar once in a blue moon.
        </p>
      </div>
    </div>
  );
}
