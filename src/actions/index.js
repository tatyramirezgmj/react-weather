import axios from 'axios';

const API_KEY = 'bf2986198e2def4211f5b6e08ba729d2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country){
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  console.log('Request:', request);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
