var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var WordController = require('../../controllers/word.controller.js');


// Map each API to the Controller FUnctions

router.get('/', WordController.getWords)

router.post('/', WordController.createWord)

router.put('/', WordController.updateWord)

router.delete('/:id',WordController.removeWord)


// Export the Router

module.exports = router;