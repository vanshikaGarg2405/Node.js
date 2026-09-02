import express from 'express'
const router = express.Router()

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
router.get('/', (req, res) => {
    //res.end("Hello Express!!")
    res.json(students) // sending response in JSON format
})

// Raeding data on the basis of filter
router.get('/search', (req, res) => {
    const {course, age} = req.query;
    const stud = students.filter(s => s.course.toLowerCase() === course.toLowerCase() && s.age === parseInt(age));
    if (!stud) {
        return res.status(404).json({
            message: "Student not found!!"
        });
    }
    res.json(stud)
});

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.patch('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

export default router