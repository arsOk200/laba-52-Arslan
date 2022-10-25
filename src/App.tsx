import React, {useState} from 'react';
import CardView from "./CardView";
import CardDeck from "./lib/CardDeck";
import card from "./lib/Card";

function App() {
  const [cards, setCards] = useState<CardDeck[]>([]);
  const  cardsDeck = new CardDeck();
  let temObject:object[] = []
  const btnClick = () => {
    let fiveCards = cardsDeck.getCards(5);
    console.log(fiveCards);
    temObject = fiveCards;
     // setCards([fiveCards]);
  };
  const button = <button onClick={btnClick}>Раздать карты</button>;
  if (cards.length === 0 ) {
    return (
      <div className="playingCards faceImages">
        {button}
      </div>
    )
  }

  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView array={setCards([temObject])}/>
        {button}
      </div>
    </div>
  );
}

export default App;
