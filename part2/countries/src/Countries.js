import React from 'react';
import Country from './Country';
import Wheater from './Wheater';

const Countries = ({ countries, showCountry }) => {
  if (countries.length > 10 || countries.length === 0)
    return <div>Too many matches, specify another filter</div>;

  if (countries.length === 1)
    return (
      <div>
        <Country country={countries[0]} />
        <Wheater countryName={countries[0].name} />
      </div>
    );

  return (
    <div>
      {countries.map(country => (
        <div key={country.alpha3Code}>
          {country.name}
          <button onClick={() => showCountry(country.name)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
