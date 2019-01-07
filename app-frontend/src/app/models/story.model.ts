export class Story {
  _id: string;
  template_id: string;
  creator: string;
  words: [string];

  constructor(template_id, creator, words) {
    this.template_id = template_id;
    this.creator = creator;
    this.words = words;
  }
}

// class Story {
//   _id: string;
//   template_id: string;
//   creator: string;
//   words: [string];
//
//   constructor(template_id, creator, words) {
//     this.template_id = template_id;
//     this.creator = creator;
//     this.words = words;
//   }
// }
// export default Story;
