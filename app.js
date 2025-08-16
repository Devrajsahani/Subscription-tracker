import express from "express"
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

// the code below just means, that if we press the sign up then this below line will execute.

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res)=>{
    res.send('Welcome to the Subscription Tracker API');
});// simple / forward slash means that we are targeting it into the homepage only.
app.listen( PORT,async()=>{ // here we are not passing the port then body in the code becuse the res.send or app.listen 
    // only takes the string as the input so 3000 and console log are already there.
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);


    await connectToDatabase();
})

export default app;