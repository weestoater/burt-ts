import React from "react";

export default function ShowMatchNotes(props: any) {
  const _notes = props.notes;
  return <p>{`${_notes}`}</p>;
}
