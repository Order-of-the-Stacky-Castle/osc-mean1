// We need to be able to access the Service
//that we just created so let's pull that in

var StoryService = require('../services/story.service.js');

// Make sure to save the context of
//this module inside the _this variable

_this = this

exports.getStories = async function (req, res, next) {

    // We're going to use ternary to check
    //the existence of the query parameters

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    try {

        var stories = await StoryService.getStories({}, page, limit)

        // Return the Template list with the appropriate
        //HTTP Status Code and Message.

        return res
            .status(200)
            .json({
                status: 200,
                data: stories,
                message: "Succesfully Recieved Stories"
            });

    } catch (e) {

        //Return an Error Response Message
        //with Code and the Error Message.

        return res.status(400).json({
            status: 400,
            message: e.message
        });

    }
};

exports.createStory = async function (req, res, next) {

    // Note: Req.Body contains the form submit values.

    var story = {
        template_id: req.body.template_id,
        words: req.body.words
    }

    try {

        // Calling the Service function
        //with the new object from the Request Body

        var createdStory = await StoryService.createStory(story)
        return res.status(201).json({
            status: 201,
            data: createdStory,
            message: "Succesfully Created Story"
        })
    } catch (e) {

        //Return an Error Response Message
        //with Code and the Error Message.

        return res.status(400).json({
            status: 400,
            message: "Story Creation was Unsuccessful, I am sorry :( "
        })
    }
}

exports.updateStory = async function (req, res, next) {

    // Id is necessary for the update

    if (!req.params.id) {
        return res.status(400).json({
            status: 400.,
            message: "Id must be present"
        })
    }

    var id = req.params.id;

    console.log(req.params);

    var story = {
        _id: id,
        template_id: req.body.template_id ? req.body.template_id : null,
        words: req.body.words ? req.body.words : null
    };

    try {
        var updatedStory = await StoryService.updateStory(story);
        return res.status(200).json({
            status: 200,
            data: updatedStory,
            message: "Succesfully Updated Story"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400.,
            message: e.message
        })
    }
}

exports.removeStory = async function (req, res, next) {

    var id = req.params.id;

    try {
        var deleted = await StoryService.deleteStory(id);
        return res.status(204).json({
            status: 204,
            message: "Successfully Deleted Story"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }

}
