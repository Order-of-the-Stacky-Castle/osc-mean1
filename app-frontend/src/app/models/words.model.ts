export class Word {
  _id: string;
  type: string;
  subtype: string;
  word: string;

  constructor(type, subtype, word){
    this.type = type;
    this.subtype = subtype;
    this.word = word;
  }
}
export default Word;
