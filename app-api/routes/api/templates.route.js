var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var TemplateController = require('../../controllers/template.controller.js');


// Map each API to the Controller FUnctions

router.get('/', TemplateController.getTemplates)

router.get('/:id', TemplateController.getTemplateById)

router.post('/', TemplateController.createTemplate)

router.put('/', TemplateController.updateTemplate)

router.delete('/:id', TemplateController.removeTemplate)


// Export the Router

module.exports = router;
