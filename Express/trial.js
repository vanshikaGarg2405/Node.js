import express from 'express'
const app = express();

// Runs for every single incoming request
app.use((req, res, next) => {
    console.log("Moddleware Executed!");
    next(); // Moves to the next middleware or route handler
});
app.get('/', (req, res) => {
    
})