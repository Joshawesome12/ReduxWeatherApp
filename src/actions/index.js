import { API_KEY } from '../config'
import axios from 'axios'

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city, country = 'us') {
  const url = `${ROOT_URL}&q=${city},${country}`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}