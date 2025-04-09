import { Request, Response } from 'express';
import { fetchWeatherData } from '../utils/fetchWeatherData';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export const getWeather = async (req: Request, res: Response) => {
  const { city } = req.query;

  if (!city || typeof city !== 'string') {
    return res
      .status(400)
      .json({ error: 'City is required and must be a string.' });
  }

  try {
    const weather = await fetchWeatherData(city, WEATHER_API_KEY!);
    return res.json(weather);
  } catch (error) {
    return res.status(500).json({ error: 'Unable to fetch weather data.' });
  }
};
