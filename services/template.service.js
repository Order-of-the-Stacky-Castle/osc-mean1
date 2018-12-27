// Access our newly created Mongoose Model
var Template = require('../models/template.model.js')

// Saving the context of this module inside the _the variable
_this = this

// Let's use an Async function to get the To Do List
exports.getTemplates = async function (query, page, limit) {

  // We also want to set up options for the mongoose paginate

  var options = {
    page,
    limit
  }
  //Let's create a Try and Catch function 
  //that way we have some error handling set. 
  //Waiting for the promise

  try {
    var templates = await Template.paginate(query, options)

    //Once the Mongoose promise is returned 
    //we're going to go ahead and return 
    //the To Do List it has produced 

    return templates;

  } catch (e) {

    //If the try didn't work we're going to 
    //go ahead and let the users know what kind of 
    //Error we have

    throw Error('Oh No! We got an error while Paginating our Templates, so sorry!')
  }
}

exports.createTemplate = async function (template) {

  // Creating a new Mongoose Object by using the new keyword

  var newTemplate = new Template({
    title: template.title,
    story: template.story,
  })

  try {

    // Let's go ahead and save the template 

    var savedTemplate = await newTemplate.save()

    return savedTemplate;
  } catch (e) {

    //if we can't create a template we want to throw an error 

    throw Error("Error while Creating Template")
  }
}

exports.updateTemplate = async function (template) {
  var id = template.id

  try {
    //Find the old template Object by the Id

    var oldTemplate = await Template.findById(id);
  } catch (e) {
    throw Error("Error occured while Finding the Template")
  }

  // If no old template Object exists return false

  if (!oldTemplate) {
    return false;
  }

  console.log(oldTemplate)

  //Edit the template Object

  oldTemplate.title = template.title
  oldTemplate.story = template.story

  console.log(oldTemplate)

  try {
    var savedTemplate = await oldTemplate.save()
    return savedTemplate;
  } catch (e) {
    throw Error("And Error occured while updating the template");
  }
}

exports.deleteTemplate = async function (id) {

  // Delete the template

  try {
    var deleted = await Template.deleteOne({
      _id: id
    })
    if (deleted.n === 0) {
      throw Error("Template Could not be deleted")
    }
    return deleted
  } catch (e) {
    throw Error("Error Occured while Deleting the Template")
  }
}