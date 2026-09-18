import express from 'express'

const router = express.Router()

router.get('/simpleInterest', (req, res) => {
    const principal = parseInt(req.query.principal);
    const time = parseInt(req.query.time);
    const rate = parseInt(req.query.rate);
    if(!principal || !time || !rate) {
        return res.status(404).json({
            message: "Principal or time or rate not given"
        })
    }
    const SI = (principal * time * rate) / 100;
    res.status(200).json({
        simpleInterest: SI
    })
})