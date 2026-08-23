// username : kalidxcode1221_db_user
//password: LJ5qUvhv8dTkXanY

import cookieParser from 'cookie-parser';
import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routs/user.routs.js';
import authRouter from './routs/auth.routs.js';
import subscriptionRouter from './routs/subscription.routs.js';
import connectToDatabase from './mongo DB/mongoDB.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

//we type app.use to specify which route are we using or if we use json
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

app.use(errorMiddleware)

app.get('/', (req, res) => {
  res.send('welcome to the subscription tracker API')
});

// ✅ Wrap in an async function
const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log('failed to start server:', error);
    process.exit(1);
  }
};

startServer(); // ✅ Call the function

export default app;