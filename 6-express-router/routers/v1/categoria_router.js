const express = require('express');
const { isAuth,isAdmin } = require('../../middleware/auth');



const { listar, guardar, borrar, update,getCategoria } = require('../../controller/categoria_controller');


const router = express.Router();

// router.all('*', isAuth,isAdmin);

router.get('/categoria', listar); 
router.get('/categoria/:id', getCategoria);
router.post('/categoria', isAuth,isAdmin, guardar);
router.delete('/categoria/:id',isAuth,isAdmin, borrar);
router.put('/categoria/:id',isAuth,isAdmin,update);
 
module.exports = router;