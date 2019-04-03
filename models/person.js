const mongoose = require('mongoose')


const url = 'mongodb+srv://risa_13:PASSWORD@telephonefullstack-mhzna.mongodb.net/fullstack-persons'

mongoose.connect(url, { useNewUrlParser: true })
mongoose.Promise = global.Promise


const Person = mongoose.model('Person', {
    name: String,
    number: String,
  })


module.exports = Person