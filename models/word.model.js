var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var WordSchema = new mongoose.Schema({
    word: String,
    type: String,
    plural: Boolean,
    profane: Boolean
})

WordSchema.plugin(mongoosePaginate)
const Word = mongoose.model('Word', WordSchema)

module.exports = Word;