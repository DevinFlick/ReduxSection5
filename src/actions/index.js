import * as SECRETS from '../secrets';
import axios from 'axios';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${SECRETS.API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeater(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
