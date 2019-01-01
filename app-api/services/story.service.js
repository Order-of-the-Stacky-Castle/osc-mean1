// Access our newly created Mongoose Model
var Story = require('../models/story.model.js');

// Saving the context of this module inside the _the variable
_this = this;

//  Async function to get all stories
exports.getStories = async function (query, page, limit) {
    // Options for mongoose paginate
    var options = {
        page,
        limit
    };
    try {
        // Return the list of stories returned by the mongoose promise
        return await Story.paginate(query, options);
    } catch (e) {
        // Failed promise return error
        throw Error(`Problem with returned database records pagination, [ERROR StoryService.getStories]: ${e.message}`)
    }
};

//  Async function to get story by _id
exports.getStoryById = async function (id) {
    try {
        // Return query results that match the story id
        return await Story.findById(id);
    } catch (e) {
        // Failed promise return error
        throw Error(`Problem getting story by id, [ERROR StoryService.getStoryById]: ${e.message}`)
    }
};

//  Async function to create and post a new story
exports.createStory = async function (story) {
    // Creating a new Mongoose Object by using the new keyword
    var newStory = new Story({
        template_id: story.template_id,
        words: story.words,
    });
    try {
        //  Promise to save Mongoose story object to database.
        return await newStory.save()
    } catch (e) {
        // Failed promise return error
        throw Error(`Error while Creating Story, [ERROR StoryService.createStory]: ${e.message}`)
    }
}

exports.updateStory = async function (story) {
    try {
        //Find the old story Object by the Id
        var oldStory = await Story.findById(story.id);
    } catch (e) {
        throw Error(`Error occurred while Finding the Story, [ERROR StoryService.updateStory]: ${e.message}`)
    }

    // If no story Object exists return false
    if (!oldStory) { return false; }
    
    console.log('Original' + oldStory);
    //Edit the story Object
    oldStory.template_id = story.template_id;
    oldStory.words = story.words;
    console.log('Updated' + oldStory);

    try {
        return await oldStory.updateOne(story);
    } catch (e) {
        throw Error(`Error occured while updating the story, [ERROR StoryService.updateStory]: ${e.message}`);
    }
}

exports.deleteStory = async function (id) {

    // Delete the template

    try {
        return await Story.deleteOne({ _id: id });
    } catch (e) {
        throw Error(`Error Occurred while Deleting the Story, [ERROR StoryService.deleteStory]: ${e.message}`)
    }
}
