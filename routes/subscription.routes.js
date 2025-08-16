import { Router} from "express";

const subscriptionRouter = Router();

subscriptionRouter.post('/',(req,res)=>res.send('Subscription created'));

export default subscriptionRouter;
