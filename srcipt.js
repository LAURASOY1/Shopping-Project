document.addEventListener("DOMContentLoaded", getProducts);
const productsContainer = document.getElementById("productsContainer");

let productsDisplayed = [];
let allProducts = [];

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("change", searchProducts);

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  productsDisplayed = data;
  displayProducts(productsDisplayed);
}

function displayProducts(productsDisplayed) {
  productsContainer.innerHTML = "";

  productsDisplayed.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;

    const nameElement = document.createElement("h3");
    nameElement.textContent = product.title;
    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${product.price}`;

    const addToCartButtonElement = document.createElement("button");
    addToCartButtonElement.textContent = "Add to Cart";

    

    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(addToCartElement);

    productsContainer.appendChild(productElement);
  });
}

function searchProducts(e) {
  const filteredProducts = productsDisplayed.filter((product) => {
    return product.title.toLowerCase().includes(e.target.value.toLowerCase());
  });

  displayProducts(filteredProducts);
}
getProducts();

