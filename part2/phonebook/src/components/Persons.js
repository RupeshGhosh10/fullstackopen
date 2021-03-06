import React from 'react';

const Persons = ({ persons, personFilter, deleteName }) => {
  return (
    <div>
      {persons.filter(personFilter).map(person => (
        <div key={person.id}>
          {person.name} {person.number} <button onClick={() => deleteName(person.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
