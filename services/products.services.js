const mongoose = require('mongoose');
const Product = require('../models/products.model');
const Provider = require('../models/provider.model')

const createProduct = async (title, price, description, image, company_name) => {
    const provider = await Provider.find({company_name});
    const provider_id = provider[0]._id.toString();
    const product = new Product({
        title,
        price,
        description,
        image,
        provider:provider_id
    });
    const result = await product.save();
    console.log(result);
}

// READ
const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        let products = id? await Product.find({id},'-_id -__v') : await Product.find({},'-_id -__v'); //{}
        res.status(200).json(products); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    createProduct,
    getProduct
}