// Access our newly created Mongoose Model
var Story = require('../models/story.model.js')

// Saving the context of this module inside the _the variable
_this = this

// Let's use an Async function to get the To Do List
exports.getStories = async function (query, page, limit) {

    // We also want to set up options for the mongoose paginate

    var options = {
        page,
        limit
    };
    //Let's create a Try and Catch function
    //that way we have some error handling set.
    //Waiting for the promise

    try {
        var stories = await Story.paginate(query, options);

        //Once the Mongoose promise is returned
        //we're going to go ahead and return
        //the To Do List it has produced

        return stories;

    } catch (e) {

        //If the try didn't work we're going to
        //go ahead and let the users know what kind of
        //Error we have

        throw Error('Oh No! We got an error while Paginating our Stories, so sorry!')
    }
}

exports.createStory = async function (story) {

    // Creating a new Mongoose Object by using the new keyword

    var newStory = new Story({
        template_id: story.template_id,
        words: story.words,
    })

    try {

        // Let's go ahead and save the template

        var savedStory = await newStory.save()

        return savedStory;
    } catch (e) {

        //if we can't create a template we want to throw an error

        throw Error("Error while Creating Story")
    }
}

exports.updateStory = async function (story) {
    var id = story._id;
    try {
        //Find the old template Object by the Id

        var oldStory = await Story.findById(id);
    } catch (e) {
        throw Error("Error occurred while Finding the Story")
    }

    // If no old template Object exists return false

    if (!oldStory) {
        return false;
    }

    console.log(oldStory);

    //Edit the template Object

    oldStory.template_id = story.template_id;
    oldStory.words = story.words;

    console.log(oldStory);

    try {
        return await oldStory.updateOne(story);
    } catch (e) {
        throw Error("And Error occured while updating the story");
    }
}

exports.deleteStory = async function (id) {

    // Delete the template

    try {
        var deleted = await Story.deleteOne({
            _id: id
        });
        if (deleted.n === 0) {
            throw Error("Story Could not be deleted")
        }
        return deleted
    } catch (e) {
        throw Error("Error Occurred while Deleting the Story")
    }
}
