var express = require('express')

var router = express.Router()
var todos = require('./api/todos.route')
var templates = require('./api/templates.route')

router.use('/todos', todos);
router.use('/templates', templates)

module.exports = router;