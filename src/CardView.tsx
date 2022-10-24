import React from 'react';
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

interface CardProps{
  rank:string;
  suit:string;
  symbol:string;
}

const card = new Card('hearts','6');
console.log(card.getScore());


const  cardsDeck = new CardDeck([]);
console.log(cardsDeck.getCards(5));

const CardView:React.FC<CardProps> = (props) => {
  return (
      <span className={'card rank-'+props.rank+' ' + props.suit}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{props.symbol}</span>
      </span>
  );
};

export default CardView;