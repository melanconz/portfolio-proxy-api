import fetch from 'node-fetch';

export const fetchWeatherData = async (city: string, apiKey: string) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return await response.json();
};
