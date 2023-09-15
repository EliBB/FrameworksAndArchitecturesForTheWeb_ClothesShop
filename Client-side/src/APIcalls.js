// database server URL
const baseURL = "http://localhost:3000/";
const debugMode = false;

function debugPrint(print) {
  if (debugMode) {
    console.log(print);
  }
}

export async function getCustomers() {
  const response = await fetch(baseURL + "customers");
  const data = await response.json();
  debugPrint(data);
  return data;
}

export async function getCustomerByID(id) {
  const response = await fetch(baseURL + "customers/" + id);
  const data = await response.json();
  debugPrint(data);
  return data;
}

export async function postCustomer(jsonObject) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(jsonObject)
  };
  const response = await fetch(baseURL + "customers", requestOptions);
  debugPrint(response);
}

export async function putCustomer(jsonObject) {
  const id = jsonObject.id
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(jsonObject),
  };
  const response = await fetch(baseURL + "customers/"+id, requestOptions);
  debugPrint(response);
}

export async function deleteCustomer(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const response = await fetch(baseURL + "customers/"+id, requestOptions);
  debugPrint(response);
}

export async function getBasket(id) {
  const response = await fetch(baseURL + "customers/"+id+"/basket");
  const data = await response.json();
  debugPrint(data);
  return data;
}

export async function addToBasket(cid, pid) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  };
  const response = await fetch(baseURL + "customers/"+cid+"/basket/"+pid, requestOptions);
  debugPrint(response);
}

export async function removeFromBasket(cid, pid) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  };
  const response = await fetch(baseURL + "customers/"+cid+"/basket/"+pid, requestOptions);
  debugPrint(response);
}

export async function getAllProducts() {
  const response = await fetch(baseURL + "products");
  const data = await response.json();
  debugPrint(data);
  return data;
}


export async function getProductById(id) {
  const response = await fetch(baseURL + "products/" + id);
  const data = await response.json();
  debugPrint(data);
  return data;
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + "products/category/" + category);
  const data = await response.json();
  debugPrint(data);
  return data;
}

export async function getProductsByCategoryAndType(category, type) {
  const response = await fetch(baseURL + "products/category/" + category + "/type/"+type);
  const data = await response.json();
  debugPrint(data);
  return data;
}