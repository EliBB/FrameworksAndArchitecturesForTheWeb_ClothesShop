import * as fs from "fs/promises";
import { getProductByID, getAllProducts } from "../products/product.model.js";
const DATABASE_FILE = "./database.json";

// return all customer from file
export async function getAllCustomers() {
  try {
    let databaseTxt = await fs.readFile(DATABASE_FILE);
    let database = JSON.parse(databaseTxt);
    let customers = database.customers;
    return customers;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      // await saveCustomers([]); // create a new file with ampty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

// Save or update customer to file
export async function updateCustomer(customer) {
  let databaseTxt = await fs.readFile(DATABASE_FILE);
  let database = JSON.parse(databaseTxt);
  for (let index = 0; index < database.customers.length; index++) {
    let currCustomer = database.customers[index]
    if(parseInt(customer.id) === parseInt(currCustomer.id)){
      database.customers[index] = customer;
    }
  }
  let textToSave = JSON.stringify(database);
  await fs.writeFile(DATABASE_FILE, textToSave);
}

// add a customer
export async function addCustomer(customer) {
  let databaseTxt = await fs.readFile(DATABASE_FILE);
  let database = JSON.parse(databaseTxt);
  let existingCustomer = false;
  for (let index = 0; index < database.customers.length; index++) {
    let currCustomer = database.customers[index]
    if(parseInt(customer.id) == parseInt(currCustomer.id)){
      existingCustomer = true;
      throw new Error(`Customer with ID:${customer.id} already exists in database`);
    }
  }
  database.customers.push(customer);
  let textToSave = JSON.stringify(database);
  await fs.writeFile(DATABASE_FILE, textToSave);
}

// remove a customer
export async function removeCustomer(customerId) {
  let databaseTxt = await fs.readFile(DATABASE_FILE);
  let database = JSON.parse(databaseTxt);
  for (let index = 0; index < database.customers.length; index++) {
    let currCustomer = database.customers[index]
    if(parseInt(customerId) === parseInt(currCustomer.id)){
      database.customers.splice(index, 1);
    }
  }
  console.log(database);
  let textToSave = JSON.stringify(database);
  await fs.writeFile(DATABASE_FILE, textToSave);
}



// test function for customer ID
function findCustomer(customerArray, Id) {
  return customerArray.findIndex(
    (currCustomer) => currCustomer.id === Id
  );
}

// get gustomer by ID
export async function getCustomerByID(customerId) {
  let customerArray = await getAllCustomers();
  let index = findCustomer(customerArray, customerId);
  if (index === -1)
    throw new Error(`Customer with ID:${customerId} doesn't exist`);
  else return customerArray[index];
}

//  add to basket
export async function addProductToBasket(customerId, productId) {
  let customer = await getCustomerByID(customerId);
  let product = await getProductByID(productId);
  customer.basket.push(product);
  updateCustomer(customer);
  return getCustomerByID(customerId);
}

//  delete from basket
export async function deleteFromBasket(customerId, productId) {
  let customer = await getCustomerByID(customerId);
  let objectFound = false;
  for( var i = 0; i < customer.basket.length; i++){ 
    if ( customer.basket[i].id === productId) { 
      customer.basket.splice(i, 1); 
      objectFound = true;
    }
  }
  if(!objectFound){
    throw new Error(`Basket for customer with ID:${customerId} does not contain Product ID:${productId}`);
  }
  updateCustomer(customer);
  return getCustomerByID(customerId);
  }

// get a customer's basket
export async function getCustomerBasket(customerId){
  let customer = await getCustomerByID(customerId);
  let basket = customer.basket;
  console.log(customer);
  return basket;
}


