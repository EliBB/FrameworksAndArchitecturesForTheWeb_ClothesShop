// index.js
import express from 'express'
import {getAllCustomers, postCustomer, getCustomer,putCustomer, deleteCustomer, addToBasket, getBasket, deleteBasket } from './customers.controller.js'

export const customerRouter = express.Router();

// middleware specific to this route
customerRouter.use(express.json())

// route handlers
customerRouter.get("/customers", getAllCustomers);
customerRouter.post("/customers", postCustomer);

customerRouter.get("/customers/:id", getCustomer);

customerRouter.put("/customers/:id",putCustomer );

customerRouter.delete("/customers/:id", deleteCustomer);

customerRouter.put("/customers/:id/basket/:pid", addToBasket);

customerRouter.delete("/customers/:id/basket/:pid", deleteBasket);

customerRouter.get("/customers/:id/basket", getBasket);