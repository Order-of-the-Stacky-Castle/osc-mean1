// We need to be able to access the Service
//that we just created so let's pull that in

var WordService = require('../services/word.service.js');

// Make sure to save the context of
//this module inside the _this variable

_this = this

exports.getWords = async function (req, res, next) {

  // We're going to use ternary to check
  //the existence of the query parameters

  var page = req.query.page ? req.query.page : 1
  var limit = req.query.limit ? req.query.limit : 100;

  try {

    var words = await WordService.getWords({}, page, limit)

    // Return the words list with the appropriate
    //HTTP Status Code and Message.

    return res
      .status(200)
      .json({
        status: 200,
        data: words,
        message: "Succesfully Received Words"
      });

  } catch (e) {

    //Return an Error Response Message
    //with Code and the Error Message.

    return res.status(400).json({
      status: 400,
      message: e.message
    });

  }
}

exports.createWord = async function (req, res, next) {

  // Note: Req.Body contains the form submit values.

  var word = {
    word: req.body.word,
    type: req.body.type,
    subtype: req.body.subtype
  }
  try {

    // Calling the Service function
    //with the new object from the Request Body

    var createdWord = await WordService.createWord(word)
    return res.status(201).json({
      status: 201,
      data: createdWord,
      message: "Succesfully Created Word"
    })
  } catch (e) {

    //Return an Error Response Message
    //with Code and the Error Message.

    return res.status(400).json({
      status: 400,
      message: "Word Creation was Unsuccesfull, I am sorry :( "
    })
  }
}

exports.updateWord = async function (req, res, next) {

  // Id is necessary for the update

  if (!req.body._id) {
    return res.status(400).json({
      status: 400.,
      message: "Id must be present"
    })
  }

  var id = req.body._id;

  console.log(req.body)

  var word = {
    id,
    word: req.body.word ? req.body.word : null,
    type: req.body.type ? req.body.type : null,
    subtype: req.body.subtype ? req.body.subtype : null
  }

  try {
    var updatedWord = await WordService.updateWord(word)
    return res.status(200).json({
      status: 200,
      data: updatedWord,
      message: "Succesfully Updated Word"
    })
  } catch (e) {
    return res.status(400).json({
      status: 400.,
      message: e.message
    })
  }
}

exports.removeWord = async function (req, res, next) {

  var id = req.params.id;

  try {
    var deleted = await WordService.deleteWord(id)
    return res.status(204).json({
      status: 204,
      message: "Succesfully Word Deleted"
    })
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    })
  }

}
