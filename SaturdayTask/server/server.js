import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connect from './config/db.js';
import userRoute from './Router/userRouter.js';
import bodyParser from 'body-parser';



dotenv.config();


app.use(bodyParser.json());


app.use(express.json());


app.use('/api', userRoute);

const PORT = process.env.PORT  || 3030;
console.log(PORT);

app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});
