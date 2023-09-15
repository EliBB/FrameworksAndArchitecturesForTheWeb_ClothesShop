import * as fs from "fs/promises";
const DATABASE_FILE = "./database.json";

// return all product from file
export async function getAllProducts() {
  try {
    let databaseTxt = await fs.readFile(DATABASE_FILE);
    let database = JSON.parse(databaseTxt);
    let products = database.products
    //console.log(database.products);
    return products;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      await saveProduct([]); // create a new file with ampty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

// save array of products to file
async function saveProduct(products = []) {
  let productsTxt = JSON.stringify(products);
  await fs.writeFile(DATABASE_FILE, productsTxt);
}

// test function for product ID
function findProduct (productArray, Id) {
  return productArray.findIndex(
    (currProduct) => currProduct.id === Id
  );
}

// get product by ID
export async function getProductByID(productId) {
  let productArray = await getAllProducts();
  let index = findProduct(productArray, productId);
  if (index === -1)
    throw new Error(`Product with ID:${productId} doesn't exist`);
  else return productArray[index];
}

// get all categories
export async function getAllCategories(){
  let productArray = await getAllProducts();
  let arrayC = [];

  for(let i = 0; i < productArray.length; i++){
    let productCategory = productArray[i].category;
    arrayC.push(productCategory);
  }
  const uniqueCategories = [...new Set(arrayC)];
  if (uniqueCategories.length == 0)
    throw new Error(`There is no categories`);
  else return uniqueCategories;
}

// get product by Category
export async function getByCategory(category){
  let productArray = await getAllProducts();
  let productCategoryArray = [];
  
  for(let i = 0; i < productArray.length; i++){
    let productCategory = productArray[i].category;
    //console.log(productCategory);
    if(productCategory == category){
      productCategoryArray.push(productArray[i]);
    }
  }
  if(productCategoryArray.length == 0){
    throw new Error(`Category: ${category} doesn't exist`);
  }
  else return productCategoryArray;
}

// get product by category and type
export async function getByCategoryAndType(category, type){
  let productArray = await getAllProducts();
  let productCategoryAndTypeArray = [];
  
  for(let i = 0; i < productArray.length; i++){
    let productCategory = productArray[i].category;
    let productType = productArray[i].type;
    //console.log(productCategory);
    if(productCategory == category && productType == type){
      productCategoryAndTypeArray.push(productArray[i]);
    }
  }

  if(productCategoryAndTypeArray.length == 0){
    throw new Error(`Category: ${category} and Type: ${type} doesn't exist together`);
  }
  else return productCategoryAndTypeArray;

}