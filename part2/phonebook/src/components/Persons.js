import React from 'react';

const Persons = ({ persons, personFilter }) => {
  return (
    <div>
      {persons.filter(personFilter).map(person => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
