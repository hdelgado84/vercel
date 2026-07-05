import express from 'express';
import {getAllProducts,  getProductById,  createProduct, updateProduct, deleteProduct } from '../controlador/products.controller.js'
import { authentication } from '../middleware/authentication.js';

const router = express.Router();

router.get('/products', getAllProducts);  //estast dos las dejo sin autenticacion para correccion mas facil

router.get("/products/:id", getProductById);

router.post("/products/create",authentication, createProduct);

router.put("/products/:id",authentication , updateProduct);

router.delete("/products/:id", authentication, deleteProduct);


export default router;