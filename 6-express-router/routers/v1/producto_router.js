const express = require('express');

const { 
  getxId,
  listar, 
  guardar, 
  borrar, 
  update,
  productoById ,
  imagen,
  getxCategoria
} = require('../../controller/producto_controller');

const { isAuth,isAdmin } = require('../../middleware/auth');

const router = express.Router();

//Params
//Middleware  - Router
router.param('productoId', productoById);


//Rutas
router.get('/producto', listar);
router.get('/producto/:productoId', getxId);
router.get('/producto/categoria/:categoria_nombre', getxCategoria);
router.get('/producto/imagen/:productoId', imagen);
router.post('/producto',isAuth,isAdmin, guardar);
router.delete('/producto/:productoId',isAuth,isAdmin, borrar); 
router.put('/producto/:id', isAuth,isAdmin, update); 

module.exports = router;