const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB
const regEx = /^[A-Z]{1}[0-9]{8}$/;


const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function(CIF){
                if(regEx.test(CIF))
                    return true;
                else {
                    return false;
                }
            }, 
            message: "introduce un CIF válido con la siguiente estructura: A12345678"
        }
    },
    address: { 
        type: String, 
        required: true
    },
    url_web: { 
        type: String, 
        required: true 
    }
    
};
// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

// insertar provider
/* const provider = new Provider({
    company_name: "El chiringuito de la Choni",
    CIF: "A45663304",
    address: "C/ sin numero",
    url_web: "www.lachonisinfronteras.com"
})
//Guardar en el BBDD
provider.save()
        .then((data)=>console.log(data))
        .catch(err=>console.log(err)); */