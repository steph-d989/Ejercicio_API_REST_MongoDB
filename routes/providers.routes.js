const providerController = require('../controllers/provider.controllers');
const router = require('express').Router();

// GET http://localhost:3000/api/products
router.get("/:id?", providerController.getProvider);
router.post("/", providerController.createProvider);
//router.put("/", providerController.editProvider);
//router.delete("/:id?", providerController.deleteProvider);

module.exports = router;

/*
POST /provider

A enviar por Body:
{
    "company_name": "Las malcriadas de Roberto",
    "CIF": "A34562345",
    "address": "Su casa S/N",
    "url_web": "www.robertoysuschicas.com"
    }
*/