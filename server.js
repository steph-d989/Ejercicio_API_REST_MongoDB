require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
// const productsApiRoutes = require("./routes/productsApi.routes")
const productsRoutes = require("./routes/products.routes")
const providersRoutes = require("./routes/providers.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

// Rutas
//API
app.use('/api/products',productsRoutes);
app.use('/api/providers',providersRoutes);

//WEB
// app.use('/api/products',productsRoutes);

// Para rutas no existentes
app.use('*',error404);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})