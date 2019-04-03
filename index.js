const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const Person = require('./models/person')

const port = process.env.PORT || 3002

  app.use(bodyParser.json())
  app.use(express.static('build'))
  app.use(cors())

  const formatPerson= (person) => {
    return {
      name: person.name,
      number: person.number,
      id: person._id
    }
  }


  app.get('/api/persons/:id', (request, response) => {

    Person
    .findById(request.params.id)
    .then(person => {
      response.json(formatPerson(person))
    })
     
  })
  
  
  app.get('/api/persons', (request, response) => {
    Person
    .find({})
    .then(persons => {
      response.json(persons.map(formatPerson))
    })
  })
  
  
  const generatePhoneNumber = () => {
    const min = 111111
    const max = 999999
    const random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random
  }

  app.post('/api/persons', (request, response) => {
  const body = request.body

  if ((body.name || body.number) === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: "040-"+generatePhoneNumber().toString()
    
  })

  person
    .save()
    .then(formatPerson)
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    })
})

  app.delete('/api/persons/:id', (request, response) => {

    Person
    .findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => {
      response.status(400).send({ error: 'malformatted id' })
    })

  })

  const error = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(error)
  
  app.listen(port, () => console.log(`Listening on port ${port}`));