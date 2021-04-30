const ModelUsuario = require('../models/usuario_model');
const ModelOrden = require('../models/orden_model');



const generarOrden = async (req, res, next) => {

  let idUsuario = req.params.idUsuario;

  try {
    let docUsuario = await ModelUsuario.findById(idUsuario).exec();

    let data = {
      usuario: {
        nombre: docUsuario.nombre,
        email: docUsuario.email,
        userId: docUsuario._id
      } 
    }

    let docOrden = await new ModelOrden(data);
    docOrden.generarOrden(docUsuario);

    res.json(docOrden);

  } catch (error) {
    next(error);
  }
 }


 //TODO Borrar
const lisgarOrden = async (req, res, next) => {

  let idUsuario = req.params.idUsuario;
  console.log('idUsuario:', idUsuario);
  

  try {
    let docOrden = await ModelOrden.find({ 'usuario.userId': idUsuario }, '-productos.producto.imagen').exec();

    console.log('docOrden:', docOrden);
    
    res.json(docOrden);

  } catch (error) {
    next(error);
  }



}




module.exports ={
  generarOrden,
  lisgarOrden

}