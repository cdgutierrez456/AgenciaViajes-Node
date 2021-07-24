import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Probando funcionamiento');
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
})

export default router;
