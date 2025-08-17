import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();


userRouter.get('/',getUsers);
// here we are using the get all users, that is the string so we can store thatt in the () no {} needed.
userRouter.get('/:id',authorize,getUser); // here in the routes we can add the middleware that should be checked before executing the routes
userRouter.post('/',(req,res)=> res.send('CREATE new user'));
userRouter.put('/:id',(req,res)=> res.send('UPDATE users'));
userRouter.delete('/:id',(req,res)=> res.send('DELETE users'));

export default userRouter;