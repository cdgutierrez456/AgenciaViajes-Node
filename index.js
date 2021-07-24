import express from 'express';
import router from './routes/index.js';

const app = express();

// Definiendo puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set('view engine', 'pug');

// Agregando router
app.use('/', router);

app.listen(port, () => {
	console.log(`El servidor esta funcionando en el puerto ${port}`)
})
