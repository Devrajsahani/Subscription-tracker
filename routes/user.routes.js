import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=> res.send('Get all users'));
// here we are using the get all users, that is the string so we can store thatt in the () no {} needed.
userRouter.get('/:id',(req,res)=> res.send('Get user details'));
userRouter.post('/',(req,res)=> res.send('CREATE new user'));
userRouter.put('/:id',(req,res)=> res.send('UPDATE users'));
userRouter.delete('/:id',(req,res)=> res.send('DELETE users'));

export default userRouter;