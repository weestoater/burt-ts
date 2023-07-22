import React from "react";

export default function ShowCards(props: any) {
  const _cards = props.cards;
  return (
    <>
      <small>Cards:</small>
      <ul className="no-bullets">
        {_cards.map((card: any, index: number) => {
          return (
            <li key={index}>
              <div className={`cards ${card.card}`}></div>
              <b>{card.player}</b>: {card.mins} mins
            </li>
          );
        })}
      </ul>
    </>
  );
}
