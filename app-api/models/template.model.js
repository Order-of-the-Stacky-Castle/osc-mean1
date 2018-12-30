var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var TemplateSchema = new mongoose.Schema({
    title: String,
    body: JSON,
})

TemplateSchema.plugin(mongoosePaginate)
const Template = mongoose.model('Template', TemplateSchema)

module.exports = Template;
