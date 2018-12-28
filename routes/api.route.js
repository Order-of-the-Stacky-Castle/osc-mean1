var express = require('express');

var router = express.Router();
var words = require('./api/words.route');
var todos = require('./api/todos.route');
var templates = require('./api/templates.route');
var stories = require('./api/stories.route');

router.use('/todos', todos);
router.use('/templates', templates);
router.use('/words', words);
router.use('/stories', stories);

module.exports = router;
