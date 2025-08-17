import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { JWT_EXPIRE_IN } from "../config/env.js";
import User from "../models/user.model.js";


// what is a req body?-> req.body is an boject containing data from the client
export const signUp = async (req,res,next)=>{
// implement sign up logic here
const session = await mongoose.startSession();
session.startTransaction(); // we are using this transaction because we need to do the atomic operations
// if refers to the database operations that update the state are atomic all or nothing

try{
    // create a new user
    const{email,password}= req.body;
    // check if the user already exists
    const exisitingUser = await User.findOne({email})

    if(exisitingUser){
        const error= new Error('User already exists');
        error.statusCode = 409;
        throw error;
    }

    // hash password (securing password)
    const salt= await bcrypt.gensalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    const newUser = await User.create([{name,email,password:hashedPassword}],{session});
    const token = jwt.sign({userId:newUser[0]._id},JWT_SECRET, {expiresIn:JWT_EXPIRE_IN})
    await session.commitTransaction();
    session.endSession();
    res.status(201).json({
        success:true,
        message:'User created successfully',
        data:{
            token,
            user:newUser[0],
        }
    })

}catch(error){
    await session.abortTransaction();
    session.endSession();
    next(error);

}
}
export const signIn = async (req,res,next)=>{
// implement sign up logic here
try{
    const{email,password}=req.body;

    const user = await User.findOne({email});

    if(!user){
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        const error = new Error('Invalide password');
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.sign({userId:user._id},JWT_SECRET, {expiresIn:JWT_EXPIRE_IN});
    res.status(200).json({
        success:true,
        message:'User signed in successfully',
        data:{
            token,
            user,
        }
    })

}catch(error){
    next(error);

}
}
export const signOut= async (req,res,next)=>{
// implement sign up logic here
}