var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var StorySchema = new mongoose.Schema({
    template_id: String,
    words: Array,
});

StorySchema.plugin(mongoosePaginate)
const Story = mongoose.model('Story', StorySchema)

module.exports = Story;
