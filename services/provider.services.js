const mongoose = require('mongoose');
const Provider = require('../models/provider.model');

const createProvider = async (company_name, CIF, address, url_web) => {
    const provider = new Provider({
        company_name,
        CIF,
        address,
        url_web
    });
    const result = await provider.save();
    console.log(result);
}

// READ
const getProvider = async (req, res) => {
    try {
        const id = req.params.id;
        let provider = id? await Provider.find({id},'-_id -__v') : await Provider.find({},'-_id -__v'); //{}
        res.status(200).json(provider); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    createProvider,
    getProvider
}