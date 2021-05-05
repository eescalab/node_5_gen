const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) =>{

  let token = req.get('Authorization');

  console.log('Header token:',token);
  

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) =>{
    if(err){
      err.statusCode = 401;
    
      next(err);
    }

    console.log('decoded:',decoded);

    req.usuario = decoded;
        
    next();

  });

}

const isAdmin = (req, res, next) => {

  let usuario = req.usuario;

  if(usuario.role === 'ADMIN_ROLE'){
    next();
  }else{
    let err = new Error('Rol no valido');
    err.statusCode = 401;
    next(err)
  }


}

const renewToken = async (req, res = response) => {
  console.log('renewToken ----------------');
  
  console.log('req.usuario:', req.usuario);
  
  const uid = req.usuario.uid;
  let {iat, exp,...payload} = req.usuario;


  let token = jwt.sign(
    payload,
    process.env.TOKEN_KEY,
    { expiresIn: process.env.CADUCIDAD_TOKEN, }
  )


  res.json({
    token
  
  });

}



module.exports = {
  isAuth,
  isAdmin,
  renewToken
}