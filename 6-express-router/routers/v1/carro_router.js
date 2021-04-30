const express = require('express');
const { isAuth } = require('../../middleware/auth');

const { 
  addCarro,
  listarCarro,
  clearCarr
} = require('../../controller/carro_controller');


const router = express.Router();

// router.all('*',isAuth)

//Rutas
router.post('/carro', addCarro);
router.get('/carro/:id', listarCarro);
router.delete('/carro/:id', clearCarr);


module.exports = router;