import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Wheater = ({ countryName }) => {
  const [wheather, setWheather] = useState({});

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY.trim();
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${countryName}`
      )
      .then(response => {
        setWheather(response.data);
      });
  }, [countryName]);

  if (JSON.stringify(wheather) !== JSON.stringify({})) {
    return (
      <div>
        <h3>Wheater in {wheather.location.name}</h3>
        <div>
          <strong>temperature:</strong> {wheather.current.temperature} Celcius
        </div>
        <div>
          <img src={wheather.current.weather_icons} alt="pic" />
        </div>
        <div>
          <strong>wind:</strong> {wheather.current.wind_speed} mph direction{' '}
          {wheather.current.wind_dir}
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Wheater;
