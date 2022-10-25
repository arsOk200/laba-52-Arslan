import React from 'react';
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

interface CardProps{
  array:object[];
}
const CardView:React.FC<CardProps> = (props) => {
  console.log(props.array);
  return (
      <span className={'card rank-'+' ' + ''}>
        <span className="rank">{}</span>
        <span className="suit">{}</span>
      </span>
  );
};

export default CardView;