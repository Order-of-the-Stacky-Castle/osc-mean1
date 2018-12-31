// We need to be able to access the Service
//that we just created so let's pull that in

var TemplateService = require('../services/template.service.js');

// Make sure to save the context of
//this module inside the _this variable

_this = this;

exports.getTemplates = async function(req, res, next) {
  // We're going to use ternary to check
  //the existence of the query parameters

  var page = req.query.page ? req.query.page : 1;
  var limit = req.query.limit ? req.query.limit : 10;

  try {
    var templates = await TemplateService.getTemplates({}, page, limit);

    // Return the Template list with the appropriate
    //HTTP Status Code and Message.

    return res.status(200).json({
      status: 200,
      data: templates,
      message: 'Succesfully Recieved Templates'
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

exports.getTemplate = async function(req, res, next) {
  var id = req.params.id;

  try {
    var story = await TemplateService.getTemplateById(id);
    console.log(story.data);
    return res.status(200).json({
      status: 200,
      data: story,
      message: `Successfully Retrieved Story _id : ${id}`
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: `[StoryController ERROR]: Problem retrieving Story with _id : ${id}; MESSAGE: ${
        e.message
      }`
    });
  }
};

exports.createTemplate = async function(req, res, next) {
  // Note: Req.Body contains the form submit values.

  var template = {
    title: req.body.title,
    story: req.body.story
  };

  try {
    // Calling the Service function
    //with the new object from the Request Body

    var createdTemplate = await TemplateService.createTemplate(template);
    return res.status(201).json({
      status: 201,
      data: createdTemplate,
      message: 'Succesfully Created Template'
    });
  } catch (e) {
    //Return an Error Response Message
    //with Code and the Error Message.

    return res.status(400).json({
      status: 400,
      message: 'Template Creation was Unsuccesfull, I am sorry :( '
    });
  }
};

exports.updateTemplate = async function(req, res, next) {
  // Id is necessary for the update

  if (!req.body._id) {
    return res.status(400).json({
      status: 400,
      message: 'Id must be present'
    });
  }

  var id = req.body._id;

  console.log(req.body);

  var template = {
    id,
    title: req.body.title ? req.body.title : null,
    story: req.body.story ? req.body.story : null
  };

  try {
    var updatedTemplate = await TemplateService.updateTemplate(template);
    return res.status(200).json({
      status: 200,
      data: updatedTemplate,
      message: 'Succesfully Updated Template'
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};

exports.removeTemplate = async function(req, res, next) {
  var id = req.params.id;

  try {
    var deleted = await TemplateService.deleteTemplate(id);
    return res.status(204).json({
      status: 204,
      message: 'Succesfully Template Deleted'
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};
