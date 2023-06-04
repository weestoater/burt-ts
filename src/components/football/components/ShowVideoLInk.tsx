import React from "react";

export default function ShowVideoLink(props: any) {
  const _video = props.video;
  return (
    <p>
      Watch the{" "}
      <a href={`${_video}`} target="_blank" rel="noreferrer">
        video highlights
      </a>{" "}
      <i className="bi bi-youtube text-danger"></i>
    </p>
  );
}
