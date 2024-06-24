const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controllers');


router.get('/', productController.getProducts);
router.post('/', productController.createProducts);
router.put('/', productController.updateProducts);
router.delete('/', productController.deleteProducts);

module.exports = router;

// GET http://localhost:3000/api/products --> ALL
// PUT http://localhost:3000/api/products?title=manzana
// POST http://localhost:3000/api/products
// ejemplo para POST:
// {
//     "title": "gamba",
//     "price": "19",
//     "description": "gamba rica",
//     "image": "gamba.jpg",
//     "provider": "Dia"
// }