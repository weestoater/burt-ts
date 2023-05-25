import React from "react";

export default function WinLoseDraw(props: any) {
  const _scored = props.scored;
  const _conceded = props.conceded;

  if (_scored > _conceded) {
    return (
      <b className="text-success bg-white p-1 border border-success">Win</b>
    );
  } else if (_scored < _conceded) {
    return (
      <b className="text-danger bg-white  p-1 border border-danger">Lost</b>
    );
  } else {
    return <b className="text-info bg-white  p-1 border border-info">Draw</b>;
  }
}
