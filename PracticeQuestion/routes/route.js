import express from 'express';

const router = express.Router();

router.get('/square/area', (req, res) => {
    const width = parseInt(req.query.width);
    if (!width || width <= 0) {
        return res.status(404).json({
            message: "Width is not given"
        });
    }
    const area = width * width;
    return res.status(200).json({
        area: area
    });
});


router.get('/square/perimeter', (req, res) => {
    const width = parseInt(req.query.width);
    if (!width || width <= 0) {
        return res.status(404).json({
            message: "Width is not given"
        });
    }
    const perimeter = 4 * width;
    return res.status(200).json({
        perimeter: perimeter
    });
});


router.get('/rectangle/area', (req, res) => {
    const height = parseInt(req.query.height);
    const width = parseInt(req.query.width);
    if (!height || !width || height <= 0 || width <= 0) {
        return res.status(404).json({
            message: "Length or width not given"
        });
    }
    const area = height * width;
    return res.status(200).json({
        area: area
    });
});

router.get('/rectangle/perimeter', (req, res) => {
    const height = parseInt(req.query.height);
    const width = parseInt(req.query.width);
    if (!height || !width || height <= 0 || width <= 0) {
        return res.status(404).json({
            message: "Length or width not given"
        });
    }
    const perimeter = 2 * (height + width);
    return res.status(200).json({
        perimeter: perimeter
    });
});

export default router;