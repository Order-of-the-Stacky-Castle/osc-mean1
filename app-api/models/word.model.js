var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var WordSchema = new mongoose.Schema({
    word: String,
    type: String,
    subtype: String
})

WordSchema.plugin(mongoosePaginate)
const Word = mongoose.model('Word', WordSchema)

module.exports = Word;