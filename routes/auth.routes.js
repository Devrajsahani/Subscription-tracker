import { Router } from "express";

const authRouter = Router();

authrouter.post ('/sign-up', (req,res)=> res.send ({title:'Sign-up'}));
authrouter.post ('/sign-in', (req,res)=> res.send ({title:'Sign-in'}));
authrouter.post ('/sign-out', (req,res)=> res.send ({title:'Sign-out'}));

export default authRouter;