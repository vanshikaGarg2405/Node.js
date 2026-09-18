import express from 'express';

const router = express.Router()

router.get('/compoundInterest', (req, res) => {
    const principal = parseInt(req.query.principal);
    const time = parseInt(req.query.time);
    const rate = parseInt(req.query.rate);
    if(!principal || !time || !rate) {
        return res.status(404).json({
            message: "Principal or time or rate not given"
        })
    }
    const amount = principal * (1 + (rate / 100) ^ time)
    const CI = amount - principal;
    res.status(200).json({
        compoundInterest: CI
    })
})