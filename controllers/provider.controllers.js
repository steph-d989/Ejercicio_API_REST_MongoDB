const Provider = require('../services/provider.services');

// CREATE
const createProvider = async (req, res) => {
    console.log(req.body);

    try{
        const data = req.body;
        let answer = await new Provider(data).save();
        res.status(201).json(answer);

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
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

// UPATE
/*const editProvider = (req, res) => {
    res.status(200).send("Provider editado!");
}

// DELETE
const deleteProvider = (req, res) => {
    res.status(200).send("Provider borrado!. Has borrado:"+req.params.id);
} */

module.exports = {
    createProvider,
    getProvider,
    //editProvider,
    //deleteProvider
}
