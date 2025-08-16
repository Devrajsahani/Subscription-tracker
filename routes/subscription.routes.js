import { Router} from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>res.send('Get all Subscription'));

subscriptionRouter.get('/:id',(req,res)=>res.send('Get Subscription details'));

subscriptionRouter.post('/',(req,res)=>res.send('Create Subscription'));

subscriptionRouter.put('/:id',(req,res)=>res.send('UPDATE Subscription'));

subscriptionRouter.delete('/',(req,res)=>res.send('Subscription DELETED'));

subscriptionRouter.get('/user/:id',(req,res)=>res.send('GET all user Subscriptions'));

subscriptionRouter.put('/:id/cancel',(req,res)=>res.send('CANCEL Subscriptions'));

subscriptionRouter.get('/upcoming-renewals',(req,res)=>res.send('GET UPCOMING RENEWLS'));


export default subscriptionRouter;
