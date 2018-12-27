// Access our newly created Mongoose Model
var Word = require('../models/word.model.js')

// Saving the context of this module inside the _the variable
_this = this

// Let's use an Async function to get the To Do List
exports.getWords = async function (query, page, limit) {

  // We also want to set up options for the mongoose paginate

  var options = {
    page,
    limit
  }
  //Let's create a Try and Catch function 
  //that way we have some error handling set. 
  //Waiting for the promise

  try {
    var words = await Word.paginate(query, options)

    //Once the Mongoose promise is returned 
    //we're going to go ahead and return 
    //the To Do List it has produced 

    return words;

  } catch (e) {

    //If the try didn't work we're going to 
    //go ahead and let the users know what kind of 
    //Error we have

    throw Error('Oh No! We got an error while Paginating our Words, so sorry!')
  }
}

exports.createWord = async function (word) {

  // Creating a new Mongoose Object by using the new keyword

  var newWord = new Word({
    word: word.word,
    type: word.type,
    plural: word.plural,
    profane: word.profane
  })

  try {

    // Let's go ahead and save the word 

    var savedWord = await newWord.save()

    return savedWord;
  } catch (e) {

    //if we can't create a word we want to throw an error 

    throw Error("Error while Creating Word")
  }
}

exports.updateWord = async function(word) {
  var id = word.id

  try {
    //Find the old word Object by the Id

    var oldWord = await Word.findById(id);
  } catch (e) {
    throw Error("Error occured while Finding the Word")
  }

  // If no old word Object exists return false

  if (!oldWord) {
    return false;
  }

  console.log(oldWord)

  //Edit the word Object

  oldWord.word = word.word
  oldWord.type = word.type
  oldWord.plural = word.plural
  oldWord.profane = word.profane

  console.log(oldWord)

  try {
    var savedWord = await oldWord.save()
    return savedWord;
  } catch (e) {
    throw Error("And Error occured while updating the word");
  }
}

exports.deleteWord = async function (id) {

  // Delete the word

  try {
    var deleted = await Word.deleteOne({
      _id: id
    })
    if (deleted.n === 0) {
      throw Error("Word Could not be deleted")
    }
    return deleted
  } catch (e) {
    throw Error("Error Occured while Deleting the Word")
  }
}