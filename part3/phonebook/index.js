const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(express.json());
morgan.token('resBody', (req, res) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body);
  }
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :resBody'));

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
];

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/info', (req, res) => {
  const info = `<div>Phonebook has info for ${persons.length} people</div><div>${new Date()}</div>`;
  res.send(info);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (body) {
    if (body.name === '' || body.number === '') {
      return res.status(404).json({
        error: 'name or number is missing'
      });
    }

    if (persons.find(p => p.name === body.name)) {
      return res.status(404).json({
        error: 'name must be unique'
      });
    }

    const newPerson = {
      id: Math.floor(Math.random() * 10000 + 1),
      name: body.name,
      number: body.number
    };
    persons = [...persons, newPerson];
    res.json(newPerson);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    persons = persons.filter(p => p.id !== id);
    res.json(person);
  } else {
    res.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
