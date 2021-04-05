import React from 'react';

const PersonForm = ({ handleNameChange, newName, handleNumberChange, newNumber, saveName }) => {
  return (
    <form>
      <div>
        name: <input onChange={handleNameChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit" onClick={saveName}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
