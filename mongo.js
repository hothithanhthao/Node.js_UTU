const mongoose = require('mongoose')

// Replace with the URL of your own database. Do not store the password on GitHub!
const url = 'mongodb+srv://risa_13:PASSWORD@telephonefullstack-mhzna.mongodb.net/fullstack-persons'

mongoose.connect(url, { useNewUrlParser: true })

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

const person = new Person({ 
    name: 'Tiina Niklander',
    number: '040-1231236',
})


Person
  .find({})
  .then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

 /* 
person
  .save()
  .then(response => {
    console.log('person saved!')
    mongoose.connection.close()
  })
*/
