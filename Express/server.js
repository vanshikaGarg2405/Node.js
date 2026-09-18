// Express is a third party module which is lightweight and provides more server based facilities than http
import 'dotenv/config';
import express from 'express';
import studentRoutes from './routes/studentRoutes.js'
import teacherRoutes from './routes/teacherRoutes.js'
import mongoose, { mongo } from 'mongoose';

const app = express(); // const server = http.createServer()
app.use(express.json()) // creating middleware
const PORT = process.env.PORT||8000;
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Database Connected!!")
})
.catch((err) => {
    console.log("Database couldn't connect!!", err)
})

app.use((req, res, next) => {
    console.log("Requested URL: ", req.originalUrl);
    console.log("Requested Type: ", req.method);
    console.log("Date: ", Date.now());
    next();
})
app.use('/students', studentRoutes)
app.use('/teachers', teacherRoutes)

app.listen(PORT, () => {
    console.log("Server is listening....")
})