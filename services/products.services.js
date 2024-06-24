const Product = require('../models/products.model');
const Provider = require('../models/provider.model');

// Listar productos, usar populate para que un campo contenga todos los datos del provider asociado al producto
const listProducts = async () => {
    try {
        const products = await Product
            .find()
            .populate('provider', 'company_name CIF addres url_web -_id')
            .select('provider title price description -_id')
        console.log(products);
        return products;
    } catch (error) {
        console.log('Error listing products:', error);
    }
};

// Crear producto pasando título + provider por parámetro
const createProduct = async(title, price, description, image, company_name) => {
    try {
        const provider = await Provider.findOne({ company_name });
        console.log("provider", provider)
        const provider_id = provider._id.toString();
        console.log("provider_id",provider_id)
        const product = new Product({
            title,
            price,
            description,
            image,
            provider: provider_id,
        });
        console.log("product",product)
        const result = await product.save();
        console.log("result",result);
        return result;
    } catch (error) {
        console.log('Error creating product:', error);
    }
};

// Modificar producto
const updateProduct = async (filter, update) => {
    try {
        const modifiedProduct = await Product
            .findOneAndUpdate(filter, update, {
                new: true
            });
        console.log(modifiedProduct);
        return modifiedProduct;
    } catch (error) {
        console.log('Cannot update product, error:', error)
    }
};

// Borrar product
const deleteProduct = async (filter) => {
    try {
        const removedProduct = await Product
            .deleteOne({ 'title': filter });
        console.log(removedProduct);
        return removedProduct;
    } catch (error) {
        console.log('Error deleting product:', error);
    }
};

module.exports = {
    listProducts,
    createProduct,
    updateProduct,
    deleteProduct
};

createProduct('malcriada 3', 30, 'malcriad2 morocha2', 'imagenmalcriadamorocha2.jpg', 'Las malcriadas de Roberto');
//createProduct('malandrin 1', 20, 'malandrin 1', 'imagenmalandro1.jpg', 'Los malandros de Luis');
//createProduct('malandrin 2', 20, 'malandrin 2', 'imagenmalandro2.jpg', 'Los malandros de Luis');
//createProduct('peruanada 1', 20, 'peruanada 1', 'imagenperuanada1.jpg|', 'Las peruanadas de Diego');
//createProduct('peruanada 2', 20, 'peruanada 2', 'imagenperuanada2.jpg|', 'Las peruanadas de Diego');
//createProduct('panchita 1', 20, 'panchita 1', 'imagenpanchita1.jpg', 'Emilio y sus Panchitas');
//createProduct('panchita 2', 20, 'panchita 2', 'imagenpanchita2.jpg', 'Emilio y sus Panchitas');


// listProducts();

// updateProduct({title: "malcriada 1"} ,{
//          title: "malcriada 2",
//          price: 30,
//          description: "malcriaca",
//          image: "malcriada1.jpg"
//      });

//deleteProduct('malcriada 2');

/*{
    "title":"malcriada 2",
    "price":20,
    "description":"malcriada morocha",
    "image":"imagenmalcriadamorocha.jpg",
    "provider":"Las malcriadas de Roberto"
} */

    //deleteProduct('malcriada 1')
/* updateProduct({title: "malcriada 2"} ,{
         title: "malcriada 1",
         price: 12,
         description: "malcriaca",
         image: "malcriada1.jpg"
     }); */
    // createProduct('sandía', 3, 'manzana rica', 'imagenmanzana.jpg', 'Zara');