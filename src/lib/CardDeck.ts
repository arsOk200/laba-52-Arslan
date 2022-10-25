import Card from "./Card";

class CardDeck{
  constructor(
    public allCards:object[] = [],
  ) {
    let suits:string[] = ['diams', 'hearts', 'clubs', 'spades'];
    let ranks:string[] = ['2','3','4','5','6','7','8','9','10','j','q','k','a'];
    for (let i:number = 0; i < suits.length; i++) {
      for (let j:number = 0; j < ranks.length;j++) {
        const card = new Card(suits[i], ranks[j]);
        allCards.push(card);
      }
    }
  }
  getCard() {
    const random:number = Math.floor(Math.random()*this.allCards.length);
    const oneCard = this.allCards.splice(random, 1);
    return oneCard;
  }
  getCards(howMany:number = 5) {
    let cardsArray:object[] = [];
    for(let i:number = 0; i < howMany; i++) {
      cardsArray.push(this.getCard());
    }
    console.log(this.allCards);
    return cardsArray;
  }

}
export default CardDeck;