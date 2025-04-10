import { Request, Response } from 'express';
import { fetchWeatherData } from '../utils/fetchWeatherData';
import 'dotenv/config';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export const getWeather = async (req: Request, res: Response) => {
  const { city } = req.query;

  if (!city || typeof city !== 'string') {
    res.status(400).json({ error: 'City is required and must be a string.' });
    return;
  }
  try {
    const weather = await fetchWeatherData(city, WEATHER_API_KEY!);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch weather data.' });
  }
};
