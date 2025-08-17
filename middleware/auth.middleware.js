import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import{JWT_SECRET} from '../config/env.js'

//someone is making a request get user details -> authorize middle ->verify->if valid->next->get usesr details

const authorize  = async(req,res,next)=>{
    try{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token=req.headers.authorization.split('')[1];
        }
        if(!token)return res.status(401).json({message:'Unauthorized'});
        const decoded = JsonWebTokenError.veryify(token,JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if(!user)return res.status(401).json({message:'Unauthorized'});
        req.user = user;

    }catch(error){
        res.status(401).json({message:'Unauthorized', error:error.message});

    }
}
export default authorize;