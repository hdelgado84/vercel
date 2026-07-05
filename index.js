import express from 'express';
import cors from 'cors';
import productsRouter from './src/rutas/products.routes.js'; //productsRputers es un nombre cualquiera para importar router
import loginRoute from './src/rutas/auth.routes.js'  // importo la ruta de login
import 'dotenv/config'   // para cargar las varibles de entorno

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // me devuelve la ruta absoluta donde este está este archivo


console.log("Servidor PFI en funcionaiento");


const app = express();

app.use(cors({

  origin: (origin, callback) => {

    if (!origin || origin === `http://localhost:${PORT}`) {

      callback(null, true);

    } else {

      callback(new Error("No permitido por CORS"));

    }

  },

  methods: ["GET", "POST", "PUT", "DELETE"],

  allowedHeaders: ["Content-Type", "Authorization"]

}));



/* para convertir el JSON de las solicitudes a Objeto js con express*/
app.use(express.json());

/* Obtengo los datos de request de la página, sirve para debugg */
app.use((req,res,next) => {

    console.log("Datos recibidos:", "Method",req.method, "url:", req.url);
    next();
})

app.use("/auth", loginRoute)
//app.use(authentication);

app.use('/', productsRouter);  // /apy en vez /


/*http://localhost:3000/ping */


/*manejo del error 404 */
app.use(function(req,res,next){

    res.status(404);
    res.send("ruta no encontrada");

})

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor en http://localhost:${PORT}`);
});