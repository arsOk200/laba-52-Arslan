class CardDeck{
  constructor(
    public allCards:object[],
  ) {
    let suits:string[] = ['diams', 'hearts', 'clubs', 'spades'];
    let ranks:string[] = ['2','3','4','5','6','7','8','9','10','j','q','k','a'];


    for (let i:number = 0; i < suits.length; i++) {
      for (let j:number = 0; j < ranks.length;j++) {
        let oneCard:object = {rank:ranks[j], suit:suits[i]};
         allCards.push(oneCard);
      }
    }

  }
  getCard() {
    const random:number = Math.floor(Math.random()*this.allCards.length);
    let oneCard:object = this.allCards.splice(random, 1);
    return oneCard;
  }
  getCards(howMany:number) {
    let cardsArray:object[] = [];
    for(let i:number = 0; i < howMany; i++) {
      cardsArray.push(this.getCard())
    }
    console.log(this.allCards);
    return cardsArray;
  }

}
export default CardDeck;