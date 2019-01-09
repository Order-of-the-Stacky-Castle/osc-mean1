const rl = require('readline-sync');

let template = {
  // _id: ObjectId("5c291ef5d163f06fdaad3b69"),
  title: "A quick something",
  body: [
    'A quick ',
    {type: 'adjective'},
    {type: 'noun'},
    'jumped over the ',
    {type: 'noun'},
    'and kept on running.'
  ]
};

function getWordPrompts(template){
  let words = [];
  for(let part of template.body){
    if (typeof part == 'object'){
      try{
        words.push(rl.question(`Please enter a ${part.type} : `));
      } catch (e) {
        console.log(e);
      }
    }
  }
  return words;
}

function printMadlib(words, template){
  let counter = 0;
  let madlib = "";
  for (let part of template.body) {
    if (typeof part == "object") {
      madlib += words[counter] + " ";
      counter ++;
    } else {
      madlib += part;
    }
  }
  return madlib;
}

console.log(printMadlib(getWordPrompts(template), template));


