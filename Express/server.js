// Express is a third party module which is lightweight and provides more server based facilities than http
import express from 'express';
const app = express(); // const server = http.createServer()
app.use(express.json()) // creating middleware
const PORT = 8000;

//For students data
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

// Raeding data on the basis of filter
app.get('/search', (req, res) => {
    const { course, age } = req.query;
    const stud = students.filter(s => s.course.toLowerCase() === course.toLowerCase() && s.age === parseInt(age));
    if (!stud) {
        return res.status(404).json({
            message: "Student not found!!"
        });
    }
    res.json(stud)
});

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

app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const stud = students.find(s => s.id === id)
    if(!stud) {
        return res.status(404).json({
            message: "Student not found!!"
        })
    }
    const {name, age, course} = req.body
    stud.name = name
    stud.age = age
    stud.course = course
    res.json(stud)
})

app.patch('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const stud = students.find(s => s.id === id)
    if(!stud) {
        return res.status(404).json({
            message: "Student not found!!"
        })
    }
    const {name, age, course} = req.body
    if(name !== undefined) stud.name = name
    if(age !== undefined) stud.age = age
    if(course !== undefined) stud.course = course
    res.json(stud)
})

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(student => student.id === id)
    if(index == -1 ) {
        res.status(404).json({
            message: "No record found"
        })
    }
    students.splice(index, 1)
    res.status(202).json({
        message: "Deleted successfuly.",
        student: students
    })
})

// For teachers data
let teachers = [
    {
        id: 1,
        name: "Manish",
        subject: "Maths",
        department: "CSE"
    },
    {
        id: 2,
        name: "Priya",
        subject: "Computer Science",
        department: "CSE"
    },
    {
        id: 3,
        name: "Rohit",
        subject: "Computer Science",
        department: "CSIT"
    }
]

app.get('/teachers', (req, res) => {
    res.json(teachers)
})

app.get('/teachers/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const teacher = teachers.find(t => t.id === id)
    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found!!"
        })
    }
    res.json(teacher)
})

app.get('/teacher/search', (req, res) => {
    const {subject, department} = req.query
    const result = teachers.filter(
        t => t.subject.toLowerCase() === subject.toLowerCase() && 
        t.department.toLowerCase() === department.toLowerCase()
    )
    if (!result) {
        return res.status(404).json({
            message: "Teacher not found!!"
        })
    }
    res.json(result)
})

app.post('/teachers', (req, res) => {
    const newTeacher = {
        id: teachers.length + 1,
        name: req.body.name,
        subject: req.body.subject,
        department: req.body.department
    }
    teachers.push(newTeacher)
    res.status(201).json({
        message: "Teacher created",
        teacher: newTeacher
    })
})

app.put('/teachers/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const teacher = teachers.find(t => t.id === id)
    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found!!"
        })
    }
    const {name, subject, department} = req.body
    teacher.name = name
    teacher.subject = subject
    teacher.department = department
    res.json(teacher)
})

app.delete('/teachers/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = teachers.findIndex(t => t.id === id)
    if (index === -1) {
        return res.status(404).json({
            message: "Teacher not found!!"
        })
    }
    teachers.splice(index, 1)
    res.status(200).json({
        message: "Deleted successfully",
        teacher: teachers
    })
})

app.listen(PORT, () => {
    console.log("Server is listening....")
})