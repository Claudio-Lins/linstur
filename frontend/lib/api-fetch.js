export function getURLTempoLisbon(path = "") {
    return `${process.env.API_URL_WEATHER_LISBON || "http://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=2aeab4d61461d65e25f4ebd4641b5714"}${path}`;
  }
  export async function fetchAPITempoLisbon(path) {
    const requestUrl = getURLTempoLisbon(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }