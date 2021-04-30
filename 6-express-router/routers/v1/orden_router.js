const express = require('express');
const { isAuth } = require('../../middleware/auth');
const { 
  generarOrden,
  lisgarOrden
} = require('../../controller/orden_controller');


const router = express.Router();



//Rutas
router.get('/orden/generar/:idUsuario', generarOrden);
router.get('/orden/listar/:idUsuario', lisgarOrden);



module.exports = router;