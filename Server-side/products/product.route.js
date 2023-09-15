// index.js
import express from 'express'
import {getAllProducts, getProduct, getCategories, getProductByCategory, getProductByCategoryAndType} from './product.controller.js'

export const productRouter = express.Router();

// middleware specific to this route
productRouter.use(express.json())

// route handlers
productRouter.get("/products", getAllProducts);

productRouter.get("/products/:id", getProduct);

productRouter.get("/products/categories/category", getCategories);

productRouter.get("/products/category/:category", getProductByCategory);

productRouter.get("/products/category/:category/type/:type", getProductByCategoryAndType);
