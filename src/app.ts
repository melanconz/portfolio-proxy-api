import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weatherRoutes';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use(weatherRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
