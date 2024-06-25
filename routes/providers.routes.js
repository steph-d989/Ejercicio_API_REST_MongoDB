const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controllers');
const { validateGetProvider, validateCreateProvider, validateUpdateProvider, validateDeleteProvider } = require('../validators/providers.validators');


router.get('/', validateGetProvider, providerController.getProviders);
router.post('/', validateCreateProvider, providerController.createProvider);
router.put('/', validateUpdateProvider, providerController.updateProviders);
router.delete('/', validateDeleteProvider, providerController.deleteProviders);

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