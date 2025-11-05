
//importing express module for routing
import express from 'express';

//importing bcrypt module for password hashing
import bcrypt from 'bcryptjs';

//importing jsonwebtoken module for token generation
import jwt from 'jsonwebtoken';

//importing User model for database interaction
import User from '../models/User.js'

//creating a router object
const router=express.Router();

//route for user signup
router.post("/signup",async(req,res)=>{
    try{
        const {username,email,password}=req.body;

        // Validate fields
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        //checking if user already exists
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        //hashing the password
        const hashedPassword=await bcrypt.hash(password,10);

        //creating a new user
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        });
        await newUser.save();
        res.status(201).json({message:"User registered successfully"});
    }
    catch(error){
        res.status(500).json({message:"Server error"});
    }
});

//route for user login
router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;

         // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        //checking if user exists
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }

        //checking if password is correct
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid credentials"});
        }

        //generating JWT token
        const token=jwt.sign(
            { id:user._id,username:user.username},
            process.env.JWT_SECRET,
            {expiresIn:"1d"} 
        );
        res.status(200).json({
            message:"Login successful",
            token,
            user:{id:user._id,username:user.username,email:user.email}
        });
    }
    catch(error){
        res.status(500).json({message:"Server error"}); 
    }
});
export default router;
