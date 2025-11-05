//importing express module for creating the server
import express from 'express';
//importing cors module for handling Cross-Origin Resource Sharing
import cors from 'cors';
//importing dotenv module to manage environment variables
import dotenv from 'dotenv';
//importing mongoose module to interact with MongoDB
import mongoose from 'mongoose';

//importing authentication routes
import authRoutes from './routes/authRoutes.js';

//using post routes with the '/api/posts' prefix
import postRoutes from './routes/postRoutes.js';

//configuring dotenv to load environment variables from .env file
dotenv.config();

//creating an express application
const app=express();

//enabling CORS for all routes
app.use(cors());

//enabling JSON parsing for incoming requests
app.use(express.json());



//using authentication routes with the '/api/auth' prefix
app.use('/api/auth',authRoutes);



//using post routes with the '/api/posts' prefix
app.use("/api/posts", postRoutes);

//defining a simple route for the root URL
app.get('/',(req,res)=>{
    res.send('Backend is running');
});

//setting the port from environment variable or defaulting to 5000
const PORT=process.env.PORT || 5000;

//connecting to MongoDB and starting the server
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch((error)=>console.log(`${error} did not connect`));   
