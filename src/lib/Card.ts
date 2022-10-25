
class Card{
  constructor(
    public suit:string,
    public rank:string) {

    let card = {suit:this.suit,rank:this.rank};
    return card;
  }
}
export default Card;