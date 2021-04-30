
const { body, validationResult } = require('express-validator');
const ModelUsuario = require('../models/usuario_model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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

function login(req,res, next) {
  
  let email = req.body.email;
  let password = req.body.password;

  ModelUsuario.findOne( {email: email} ,(err, docUsuario) =>{

    if( err || !docUsuario  ) return errorHandler(docUsuario, next, err);

    if(! bcrypt.compareSync(password,docUsuario.password)  ){
      return res.status(401).json({
        message: 'usuario o password incorrecto'
      })
    }

    let payload = {
      usuarioId: docUsuario._id,
      role: docUsuario.role
    }

    // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    let token = jwt.sign(
      payload,
      process.env.TOKEN_KEY,
      { expiresIn: process.env.CADUCIDAD_TOKEN, }
    )
    

  

    let user = docUsuario.toObject();
    delete user.password;
    delete user.cart;
    
    return res.json({
      usuario : {
        usuarioId: user._id,
        nombre: user.email,
        role: user.role,
      },
      token: token
    });

  });

}




function signup (req, res, next) {

  console.log(req.body);

  
  const salt = bcrypt.genSaltSync();
  console.log('salt:->',salt);
  

  let data = {
    nombre : req.body.nombre,
    email: req.body.email,
    password : bcrypt.hashSync(req.body.password, salt),
    role: req.body.role
  }

  let modelusuario = new ModelUsuario(data);
  modelusuario.save( (err, docUsuario) => {
    if( err || !docUsuario  ) return errorHandler(docUsuario, next, err)

    //TODO Borrar
    let payload = {
      usuarioId: docUsuario._id,
      role: docUsuario.role
    }

    let token = jwt.sign(
      payload,
      process.env.TOKEN_KEY,
      { expiresIn: process.env.CADUCIDAD_TOKEN, }
    )
    
    return res.json({
      usuario: {
        usuarioId: docUsuario._id,
        nombre: docUsuario.nombre,
        role: docUsuario.role,
      },
      token: token
    });

    // return res.json({
    //   data: docUsuario
    // });
})
  

}

module.exports ={
  signup,
  login
}
