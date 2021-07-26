const guardarTestimonial = (req, res) => {

    // Validando datos
    const {nombre, correo, mensaje} = req.body;

    if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        console.log('Todos los datos son obligatorios');
    }

}

export {
    guardarTestimonial
}

