import * as customerModel from "./customers.model.js";

export async function getAllCustomers(req, res) {
    try {
        let allCustomers = await customerModel.getAllCustomers();
        res.json(allCustomers);
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }

export async function postCustomer(req, res) {
    try {
      let newCustomer = req.body;
      await customerModel.addCustomer(newCustomer);
      res.end()
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }
  export async function getCustomer (req, res) {
    try {
      let id = parseInt(req.params.id)
      let customer = await customerModel.getCustomerByID(id);
      res.json(customer);
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }

  export async function putCustomer  (req, res) {
    try {
      let data = JSON.parse(req);
      let id = parseInt(data.params.id)
      let customer = data.body;
      await customerModel.updateCustomer(customer);
      res.end();
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }

  export async function deleteCustomer (req, res) {
    try {
      let data = JSON.parse(req);
      let id = parseInt(data.params.id)
      await customerModel.removeCustomer(id);
      res.end();
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }

  export async function addToBasket (req, res){
    try{
      let id = parseInt(req.params.id);
      let productId = parseInt(req.params.pid);
      let newBasket = await customerModel.addProductToBasket(id, productId);
      res.send(newBasket);
      // res.json(newBasket);
      //res.end();
    } catch (error){
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }

  export async function deleteBasket (req, res){
    try{
      let id = parseInt(req.params.id);
      let productId = parseInt(req.params.pid);
      let newBasket = await customerModel.deleteFromBasket(id, productId);
      res.send(newBasket);
      // res.json(newBasket);
      //res.end();
    } catch (error){
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }

  export async function getBasket (req, res) {
   try {
    let id = parseInt(req.params.id);
    let basket = await customerModel.getCustomerBasket(id);
    res.send(basket);
   } catch (error) {
    res.status(400).send(error.message);
   } 
  }