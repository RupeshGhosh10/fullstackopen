import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Countries from './Countries';

function App() {
  const [inputField, setInputField] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(inputField.length !== 0 ? `https://restcountries.eu/rest/v2/name/${inputField}` : 'https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {});
  }, [inputField]);

  const showCountry = name => {
    setInputField(name);
  };

  const handleInputFieldChange = e => {
    setInputField(e.target.value);
  };

  return (
    <div>
      <div>
        find countries
        <input value={inputField} onChange={handleInputFieldChange} />
      </div>
      <Countries countries={countries} showCountry={showCountry} />
    </div>
  );
}

export default App;
