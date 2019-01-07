export class Word {
  _id: string;
  type: string;
  subtype: string;
  word: string;
  plural: boolean;

  constructor(){
    this.type = '';
    this.subtype = '';
    this.word = '';
    this.plural = false;
  }
}
export default Word;
