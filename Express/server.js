// Express is a third party module which is lightweight and provides more server based facilities than http
import express from 'express';
const app = express(); // const server = http.createServer()
app.use(express.json()) // creating middleware
const PORT = 8000;
let students = [
    {
        id: 1,
        name: "Ram",
        age: 21,
        course: "BCA"
    },
    {
        id: 2,
        name: "Shyam",
        age: 21,
        course: "B.Tech"
    }
]
// Requesting all resources from server
app.get('/students', (req, res) => {
    //res.end("Hello Express!!")
    res.json(students) // sending response in JSON format
})
app.get('/students/:id', (req, res) => {
    //console.log(req.params.id) //params means parameters
    const id = parseInt(req.params.id)
    const student = students.find(s => s.id === id)
    if(!student) {
        return res.status(404).json({
            message: "Student not found!!"
        })
    }
    res.json(student)
})
app.get('/about', (req, res) => {
    res.end("This is about express.js")
})

app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    }
    students.push(newStudent)
    res.status(201).json({
        message: "Student created",
        student: newStudent
    })
})

app.delete('/students/:id', (req, res) => {
    
})
app.listen(PORT, () => {
    console.log("Server is listening....")
})