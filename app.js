import express from "express"
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to the Subscription Tracker API');
});// simple / forward slash means that we are targeting it into the homepage only.
app.listen( PORT,()=>{ // here we are not passing the port then body in the code becuse the res.send or app.listen 
    // only takes the string as the input so 3000 and console log are already there.
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
})

export default app;