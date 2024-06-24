const { response } = require('express');
const productService = require('../services/products.services');

const getProducts = async (req, res) => {
    let products;
    try {
        products = await productService.listProducts();
        res.status(200).json(products); // [] con los productos encontradas
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProducts = async (req, res) => {
    const { title, price, description, image, company_name } = req.body;
        try {
            const response = await productService.createProduct(title, price, description, image, company_name);
            res.status(201).json({
                "items_created": response,
                data: req.body
            });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
};

const updateProducts = async (req, res) => {
    filter = req.query;
    update = req.body;
        try {
            const modifiedProduct = await productService.updateProduct(filter, update);
            res.status(200).json(modifiedProduct);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};

// deleteProduct
// DELETE http://localhost:3000/api/products?title=title.valor
const deleteProducts = async (req, res) => {
    let products;
    try {
        products = await productService.deleteProduct(req.query.title);
        res.status(200).json(products); // [] con los products encontradas
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

module.exports = {
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts
};
