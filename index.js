const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 3002
let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Martti Tienari",
        "number": "040-123456",
        "id": 2
      },
      {
        "name": "Arto Järvinen",
        "number": "060-123456",
        "id": 3
      },
      {
        "name": "Lea Kutvonen",
        "number": "040-123456",
        "id": 4
      }
]


  app.use(bodyParser.json())
  app.use(cors())

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if ( person ) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
  
  
  const generatePhoneNumber = () => {
    const min = 111111
    const max = 999999
    const random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random
  }

  const generateId = () => {
    const maxId = persons.length > 0 ? persons.map(n => n.id).sort().reverse()[0] : 1
    return maxId + 1
  }

  app.post('/api/persons', (request, response) => {
  const body = request.body

  if ((body.name || body.number) === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = {
    name: body.name,
    number: "040-"+generatePhoneNumber().toString(),
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)
})

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)

    response.status(204).end()
  })

  app.listen(port, () => console.log(`Listening on port ${port}`));