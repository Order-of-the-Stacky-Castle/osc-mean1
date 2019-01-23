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

let words = ["brown", "fox", "moon"];

let story = {
  user_id: 1,
  template_id: "5c291ef5d163f06fdaad3b69",
  words: ["brown", "fox", "moon"]
};

function printTemplate(template){
  let str = "";
  for (let part of template.body) {
    if (typeof part == "object") {
      str += "[< " + part.type + " >] ";
    } else {
      str += part;
    }
  }
  return str;
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

function printUserMadlib(story, template){
  return printMadlib(story.words, template);
}


console.log(printTemplate(template));
console.log(printMadlib(words, template));
console.log(printUserMadlib(story, template));

