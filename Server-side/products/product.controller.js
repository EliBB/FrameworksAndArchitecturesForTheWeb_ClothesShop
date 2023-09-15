import * as productModel from "./product.model.js";

export async function getAllProducts(req, res) {
    try {
        let allProducts = await productModel.getAllProducts();
        res.json(allProducts);
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }


  export async function getProduct (req, res) {
    try {
      let id = parseInt(req.params.id)
      let product = await productModel.getProductByID(id);
      res.json(product);
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }

export async function getCategories (req, res){
  try{
    let allCategories = await productModel.getAllCategories();
    res.json(allCategories);

  } catch (error){
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getProductByCategory(req, res){
  try{
    let category = req.params.category;
    let productsByCategory = await productModel.getByCategory(category);
    res.json(productsByCategory);
  } catch (error){
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getProductByCategoryAndType(req, res){
  try{
    let category = req.params.category;
    let type = req.params.type;
    let productsByCategoryAndType = await productModel.getByCategoryAndType(category, type);
    res.json(productsByCategoryAndType);
  } catch (error){
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}