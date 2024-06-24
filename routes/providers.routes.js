const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controllers');


router.get('/', providerController.getProviders);
router.post('/', providerController.createProvider);
router.put('/', providerController.updateProviders);
router.delete('/', providerController.deleteProviders);

module.exports = router;

// GET http://localhost:3000/api/providers --> ALL
// PUT http://localhost:3000/api/providers?company_name=name
// POST http://localhost:3000/api/providers
// ejemplo para POST:
// {
//     company_name: "Alcampo",
//     CIF: "A40236882",
//     address: "Calle de Fulgencio 112",
//     url_web: "https://www.alcampo.com",
//     isActive: true
// }