import React from 'react';

// import { Container } from './styles';

export default function Board(props) {
  const drop = e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('card_id');

    const card = document.getElementById(cardId);

    card.style.display = 'block';

    e.target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {' '}
      {props.children}
    </div>
  );
}
