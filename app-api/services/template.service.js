// Access our newly created Mongoose Model
var Template = require('../models/template.model.js');

// Saving the context of this module inside the _the variable
_this = this;
<<<<<<< HEAD

// Async function to get all templates
exports.getTemplates = async function(query, page, limit) {
  // Options for the mongoose paginate
  var options = {
    page,
    limit
  };
  try {
    // Return the list of templates returned by the mongoose promise
    return await Template.paginate(query, options);
  } catch (e) {
    // Failed promise return error
    throw Error(
      `Problem with returned database records pagination, [ERROR TemplateService.getTemplates]: ${
        e.message
      }`
    );
  }
};
=======

// Let's use an Async function to get the To Do List
exports.getTemplates = async function (query, page, limit) {

  // We also want to set up options for the mongoose paginate

  let options = {
    page,
    limit
  };
  //Let's create a Try and Catch function
  //that way we have some error handling set.
  //Waiting for the promise
>>>>>>> dev

// Async function to get a template by id
exports.getTemplateById = async function(id) {
  try {
<<<<<<< HEAD
    return await Template.findById(id);
  } catch (e) {
    // Failed promise return error
    throw Error(
      `Problem getting story by id, [ERROR TemplateService.getTemplateById]: ${
        e.message
      }`
    );
  }
};
=======
    //Once the Mongoose promise is returned
    //we're going to go ahead and return
    //the To Do List it has produced
    return await Template.paginate(query, options);

  } catch (e) {

    //If the try didn't work we're going to
    //go ahead and let the users know what kind of
    //Error we have

    throw Error('Oh No! We got an error while Paginating our Templates, so sorry!')
  }
};

exports.getTemplate = async function(id) {
  try {
    var returned = await Template.findById({_id: id });
    return returned;
  } catch (e) {
    throw Error(`Could not get Template with _id ${id}`)
  }
};

exports.createTemplate = async function (template) {
>>>>>>> dev

exports.createTemplate = async function(template) {
  // Creating a new Mongoose Object by using the new keyword

  var newTemplate = new Template({
    title: template.title,
    story: template.story
  });

  try {
    // Let's go ahead and save the template

<<<<<<< HEAD
    var savedTemplate = await newTemplate.save();
=======
    // Let's go ahead and save the template

    var savedTemplate = await newTemplate.save()
>>>>>>> dev

    return savedTemplate;
  } catch (e) {
    //if we can't create a template we want to throw an error

<<<<<<< HEAD
    throw Error('Error while Creating Template');
=======
    //if we can't create a template we want to throw an error

    throw Error("Error while Creating Template")
>>>>>>> dev
  }
};

exports.updateTemplate = async function(template) {
  var id = template.id;

  try {
    //Find the old template Object by the Id

    var oldTemplate = await Template.findById(id);
  } catch (e) {
    throw Error('Error occured while Finding the Template');
  }

  // If no old template Object exists return false

  if (!oldTemplate) {
    return false;
  }

  console.log(oldTemplate);

  //Edit the template Object

  oldTemplate.title = template.title;
  oldTemplate.story = template.story;

  console.log(oldTemplate);

  try {
    var savedTemplate = await oldTemplate.save();
    return savedTemplate;
  } catch (e) {
    throw Error('And Error occured while updating the template');
  }
};
<<<<<<< HEAD
=======

exports.deleteTemplate = async function (id) {
>>>>>>> dev

exports.deleteTemplate = async function(id) {
  // Delete the template

  try {
    var deleted = await Template.deleteOne({
      _id: id
    });
<<<<<<< HEAD
    if (deleted.n === 0) {
      throw Error('Template Could not be deleted');
    }
    return deleted;
=======
    return deleted
>>>>>>> dev
  } catch (e) {
    throw Error('Error Occured while Deleting the Template');
  }
};
