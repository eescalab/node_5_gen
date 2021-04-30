const ModelProducto = require('../models/producto_model');


function errorHandler(data, next, err = null){

  if(err){
    return next(err);
  }

  if(!data){

    let error = new Error('No existe !');
    error.statusCode = 404;
    return next(error)
    
  }

}

//==========
// [Param] 	productoById
//==========

function productoById(req, res, next, id) {

  
  let myquery = ModelProducto.findById(id);

  myquery
  // .select('-imagen')
  .exec( (err, docProducto) => {

    if( err || !docProducto  ) return errorHandler(docProducto, next, err)
    //cargamos en el request [docProducto]
    req.docProducto = docProducto;
    next();

  })
}

//==========
//	Listar Productos x Categoria
//==========

//TODO borrar
function getxCategoria(req, res, next) {
  console.log('req.params:', req.params);

  let categoria_nombre = req.params.categoria_nombre;
  let query = categoria_nombre !='undefined' ? { categoria_nombre } : {}
  
  ModelProducto.find( query ).select('-imagen')
    .exec((err, items) => {

      if (err || !items) return errorHandler(items, next, err)
      
      return res.json({
        items: items
      })

    })

}

//==========
//	get Producto x Id
//==========

function getxId(req, res, next) {

  return res.json({
    data : req.docProducto
  })

}

//==========
//	Listar Productos
//==========

function listar(req, res, next) {
 

  let myquery = ModelProducto.find();

  myquery
    .select('-imagen')
    .exec( (err, items) =>{
    
    if( err || !items  ) return errorHandler(items, next, err)


    return res.json({
      items: items
    })

  } )

}


//==========
//	Mostrar Imagen
//==========


const imagen = (req, res) =>{

  // console.log('req.docProducto:',req.docProducto);

  res.set('Content-Type', req.docProducto.imagen.contentType);
  res.set('xxxxx', 'aaaaabb');

  return res.send(req.docProducto.imagen.data);
  
}

//==========
//	Guardar Productos
//==========
function guardar(req, res, next){



  
  let data = {
    producto_nombre : req.body.producto_nombre,
    descripcion : req.body.descripcion,
    precio : req.body.precio,
    stock : req.body.stock,
    vendidos : req.body.vendidos,
    disponible : req.body.disponible,
    categoria_nombre : req.body.categoria_nombre
  }

  

  let modelProducto = new ModelProducto(data);

  if(req.files){

    console.log(req.files);
    

    modelProducto.imagen.data = req.files.imagen.data;
    modelProducto.imagen.contentType = req.files.imagen.mimetype;
  }

  modelProducto.save( (err, docProducto)  => {

    if(err || !docProducto) return errorHandler(docProducto, next, err);


      docProducto = docProducto.toObject();
      delete docProducto.imagen;


    res.json({
      data : docProducto
    })

  })

}


//==========
// Borrar Productos 
//==========
function borrar(req, res){

  let docProducto = req.docProducto;

  docProducto.disponible = false;
  docProducto.save( (err,item ) => {

    if( err || !item  ) return errorHandler(item, next, err)

    return res.json({
      items: item
    })
  })

}

//==========
//	Actualizar Productos
//==========
function update(req, res, next){

  let id = req.params.id;

  ModelProducto.findByIdAndUpdate(
    id, 
    req.body ,
    { new : true},
    (err, docProducto) =>{
      if( err || !docProducto  ) return errorHandler(docProducto, next, err)

      return res.json({
        items: docProducto
      })
    }
  )

}

module.exports ={
  productoById,
  getxId,
  listar,
  guardar,
  borrar,
  update,
  imagen,
  getxCategoria
}

