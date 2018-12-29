var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var TemplateSchema = new mongoose.Schema({
    title: String,
    story: String,
})

TemplateSchema.plugin(mongoosePaginate)
const Template = mongoose.model('Template', TemplateSchema)

module.exports = Template;