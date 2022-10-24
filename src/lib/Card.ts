

class Card{
  constructor(
    public suit:string,
    public rank:string) {
    if (this.rank.toLowerCase() === 'q' || this.rank.toLowerCase() === 'j' || this.rank.toLowerCase() === 'k') {
      this.rank = '10';
    } else if (this.rank.toLowerCase() === 'a') {
      this.rank = '11';
    } else  {
      parseInt(this.rank)
    }
  }
    getScore() {
      if(this.rank >= '2' || this.suit <= '10'){
        return this.rank+' '+this.suit
      }else {
       alert('Введены неправльные данные!');
      }
  }
}
export default Card;