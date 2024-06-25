const { response } = require('express');
const providerService = require('../services/provider.services');

const createProvider = async (req, res) => {
    const { company_name, CIF, address, url_web } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const response = await providerService.createProvider(company_name, CIF, address, url_web);
        res.status(201).json({
            "items_created": response,
            data: req.body
        });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const getProviders = async (req, res) => {
    let providers;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        providers = await providerService.listProviders();
        res.status(200).json(providers); // [] con las authors encontradas
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProviders = async (req, res) => {
    filter = req.query;
    update = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const modifiedProvider = await providerService.updateProvider(filter, update);
        res.status(200).json(modifiedProvider);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProviders = async (req, res) => {
    let providers;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        providers = await providerService.deleteProvider(req.query.company_name);
        res.status(200).json(providers); // [] con los providers encontradas
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

module.exports = {
    createProvider,
    getProviders,
    updateProviders,
    deleteProviders
}
