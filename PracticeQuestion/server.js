import express from 'express';
import router from './routes/route.js';
import simpleInterest from './routes/simpleInterest.js';
import compoundInterest from './routes/compoundInterest.js';

const app = express();

app.use('/', router);
app.use('/', simpleInterest);
app.use('/', compoundInterest);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});