import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import services from './services/phoneNumbers';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    services.getAll().then(data => {
      setPersons(data);
    });
  }, []);

  const saveName = e => {
    e.preventDefault();

    const person = persons.find(x => x.name === newName); 

    if (person) {
      if (window.confirm(`${person.name} is already added to phonebook, replace the old numbee with new one?`)) {
        let newPerson = {
          name: person.name,
          number: newNumber
        };
        services.update(person.id, newPerson).then(data => {
          setPersons(persons.map(person => person.id === data.id ? data : person));
        });
      }
    } 
    else {
      let newPerson = {
        name: newName,
        number: newNumber
      };

      services.save(newPerson).then(data => {
        setPersons([...persons, data]);
      });
    }

    setNewName('');
    setNewNumber('');
  };

  const deleteName = id => {
    const name = persons.find(person => person.id === id).name;
    if (window.confirm(`Delete ${name} ?`)) {
      services.deleteNumber(id).then(data => {
        setPersons(persons.filter(person => person.id !== id));
      });
    }
  };

  const personFilter = person =>
    person.name.toLowerCase().includes(filter.toLowerCase());

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
        saveName={saveName}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        personFilter={personFilter}
        deleteName={deleteName}
      />
    </div>
  );
};

export default App;
