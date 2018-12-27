var express = require('express')

var router = express.Router()
var todos = require('./api/todos.route')
var templates = require('./api/templates.route')
var words = require('./api/words.route')

router.use('/todos', todos);
router.use('/templates', templates);
router.use('/words', words)

module.exports = router;