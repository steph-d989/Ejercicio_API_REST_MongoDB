const productsController = require('../controllers/products.controllers');
const router = require('express').Router();

// GET http://localhost:3000/api/products
router.get("/:id?", productsController.getProduct);
router.post("/", productsController.createProduct);
/* router.put("/", productsController.editProduct);
router.delete("/:id?", productsController.deleteProduct); */

module.exports = router;