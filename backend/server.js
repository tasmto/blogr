import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
import morgan from 'morgan';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();
connectDB();
const app = express();

// Log all request during development
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json()); // allows us to use JSON data in the body

// Mount the API routes
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes); // mount the file upload routes

// Make the local server folder uploads accessible to express

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req, res) => {
  res.send('API is running');
});

// Give the express server access to the error middleware (to use when there is an error)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process?.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
