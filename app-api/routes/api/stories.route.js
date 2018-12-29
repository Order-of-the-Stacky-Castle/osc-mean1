var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var StoryController = require('../../controllers/story.controller.js');


// Map each API to the Controller FUnctions

// router.get('/', StoryController.getStory)
router.get('/', StoryController.getStories)

router.post('/', StoryController.createStory)

router.put('/:id', StoryController.updateStory)

router.delete('/:id', StoryController.removeStory)


// Export the Router

module.exports = router;
