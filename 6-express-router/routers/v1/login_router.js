const { validateSingUp } = require('../../validators/vlogin');


const express = require('express');

const { 
  signup,
  login
  
} = require('../../controller/login_controller');

const { isAuth, renewToken } = require('../../middleware/auth');

const router = express.Router();



//Rutas
router.post(
  '/signup', 
  validateSingUp,
  signup
);

router.post(
  '/login', 
  login
);

router.get(
  '/login/renew',
  isAuth,
  renewToken,
);


module.exports = router;





















// router.post(
//   '/signup', 

//   body('nombre').trim().not().isEmpty().withMessage('nombre requerido'),

//   body('email').isEmail()
//     .withMessage('ingrese un email valido')
//     .custom( (value)=>{
//       return ModelUsuario.findOne( {email:value} ).then( userDoc => {
//         if(userDoc){
//           return Promise.reject('Este correo ya existe : validator ')
//         }
//       } ) 
//     } ),

//   body('password').trim()
//     .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])/)
//     .withMessage('debe tener numeros y caracteres minusculas y mayusculas y caracteres @$.!%*#?&')
//     .isLength( {min:5} )
//     .withMessage('minimo 5 caracteres'),

//   (req, res, next) => {
//     const arrayErrors = validationResult(req);
//     if (!arrayErrors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     next()

//   },

//   signup
// );

