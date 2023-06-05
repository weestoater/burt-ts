import React from "react";

export default function WinLoseDraw(props: any) {
  const _scored = props.scored;
  const _conceded = props.conceded;

  if (_scored > _conceded) {
    return (
      <div className="wld-box">
        <b className="text-success bg-white border border-success wld">Win</b>
      </div>
    );
  } else if (_scored < _conceded) {
    return (
      <div className="wld-box">
        <b className="text-danger bg-white border border-danger wld">Lost</b>
      </div>
    );
  } else {
    return (
      <div className="wld-box">
        <b className="text-info bg-white border border-info wld">Draw</b>
      </div>
    );
  }
}
