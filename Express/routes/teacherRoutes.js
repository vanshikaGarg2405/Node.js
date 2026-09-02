import express from 'express'
const router = express.Router()

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

router.get('/', (req, res) => {
    res.json(teachers)
})

router.get('/search', (req, res) => {
    const {subject, department} = req.query
    const teacher = teachers.filter(
        t => t.subject.toLowerCase() === subject.toLowerCase() && 
        t.department.toLowerCase() === department.toLowerCase()
    )
    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found!!"
        })
    }
    res.json(teacher)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const teacher = teachers.find(t => t.id === id)
    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found!!"
        })
    }
    res.json(teacher)
})

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const teacher = teachers.find(t => t.id === id)
    if(!teacher) {
        return res.status(404).json({
            message: "Teacher not found!!"
        })
    }
    const {name, subject, department} = req.body
    if(name !== undefined) teacher.name = name
    if(subject !== undefined) teacher.subject = subject
    if(department !== undefined) teacher.department = department
    res.json(teacher)
})

router.delete('/:id', (req, res) => {
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

export default router