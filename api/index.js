import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // initialize
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoute from '../api/routes/auth.route.js'
import path from 'path'

import cookieParser from 'cookie-parser';

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});



mongoose.connect(process.env.MONGO).then (()=>{
  console.log("Connected to MongoDB")
}).catch((err)=>{
  console.log(err)
});


//
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoute);

app.use((err, req, res, next)=> {
  const statusCode = err.status || 500 // internal server error
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({success: false, message, statusCode});
});

app.listen(3000, () => {
  console.log("Server Starting....")
});

