import { Router } from "express";
import { signUp,signIn,signOut } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post ('/sign-up', (req,res)=> res.send ({signUp}));
authRouter.post ('/sign-up',  signIn);
authRouter.post ('/sign-out', (req,res)=> res.send ({signOut}));

export default authRouter;