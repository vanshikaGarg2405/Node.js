import express from 'express'
const app = express() // const server = http.createServer()

app.get('/', (req, res) => {
    res.end("Hello Express!!")
})
app.get('/about', (req, res) => {
    res.end("This is about express.js")
})
app.listen(3000, () => {
    console.log("Server is listening....")
})