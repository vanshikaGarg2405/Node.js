// Express is a third party module which is lightweight and provides more server based facilities than http
import express from 'express';
import studentRoutes from './routes/studentRoutes.js'
import teacherRoutes from './routes/teacherRoutes.js'


const app = express(); // const server = http.createServer()
app.use(express.json()) // creating middleware
const PORT = 8000;
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