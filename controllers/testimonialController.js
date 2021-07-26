const guardarTestimonial = (req, res) => {

    // Validando datos
    const {nombre, correo, mensaje} = req.body;

    if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores: 'Todos los campos son obligatorios',
            nombre,
            correo,
            mensaje
        })
    }

}

export {
    guardarTestimonial
}

