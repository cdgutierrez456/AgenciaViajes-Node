import {Testimonial} from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {

    // Validando datos
    const {nombre, correo, mensaje} = req.body;

    if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        // Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores: 'Todos los campos son obligatorios',
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        // Almacenando datos en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }

}

export {
    guardarTestimonial
}

