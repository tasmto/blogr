import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
import morgan from 'morgan';

dotenv.config();
const app = express();

// Log all request during development
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json()); // allows us to use JSON data in the body

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process?.env.NODE_ENV} mode on port ${PORT}`
  )
);
