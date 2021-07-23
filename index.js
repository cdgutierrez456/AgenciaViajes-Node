import express from 'express';

const app = express();

// Definiendo puerto
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.send('Probando funcionamiento');
})

app.listen(port, () => {
	console.log(`El servidor esta funcionando en el puerto ${port}`)
})
