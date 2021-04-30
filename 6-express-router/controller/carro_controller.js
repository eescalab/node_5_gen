const ModelProducto = require('../models/producto_model');
const ModelUsuario = require('../models/usuario_model');

//==========
//	Add Carro
//==========
const addCarro = async (req, res, next) => {

  let productId = req.body.productId;
  let usuarioId = req.body.usuarioId;

  try {
    docProducto = await ModelProducto.findById(productId).exec()
    
    if(!docProducto){
      err =  new Error('No Existe')
      err.statusCode = 404;
      throw(err);
    }
    
    docUsuario = await ModelUsuario.findById(usuarioId).exec();

    
    
    //TODO borrar
    docUsuario = await docUsuario.addCarro(docProducto);
   
    res.json(
      docUsuario.cart
    )


  } catch (error) {
    next(error);
  }

  
  docUsuario = await ModelUsuario.find

  

}

//==========
//	Listar Carro
//==========

const listarCarro = (req, res)=>{

  console.log('listarCarro');
  //TODO borrar
  ModelUsuario.findById(req.params.id, 'cart').
    populate('cart.items.productId','-imagen').exec( (err, data) => {
    if(err){
      return res.json(err);
    }

    return res.json(
      data.cart
    )
  });

  //callbaks -> 

  //==========
  // callbaks
  // 1	ModelUsuario.findById(req.params.id , (err, data) => { data }
  // exec
  //  1 Promesa -  ModelUsuario.findById(req.params.id).exec()
  //            doc = await ModelUsuario.findById(req.params.id).exec()
  // exec
  // 2 Callback  - ModelUsuario.findById(req.params.id).exec( (err, data) => { data }
  //       
  //==========



}

//==========
//	Limpiar Carro
//==========

const clearCarr = async (req, res) => {

  let docUsuario = await ModelUsuario.findById(req.params.id).exec()
  console.log('before clear cart docUsuario:',docUsuario);

  docUsuario = await docUsuario.clearCarrito();
  console.log('after clear cart docUsuario:',docUsuario);

  return res.json(docUsuario)
}

module.exports ={
  addCarro,
  listarCarro,
  clearCarr
}