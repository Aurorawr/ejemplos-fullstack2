
const productsStorageKey = 'products';
const productNameInput = document.getElementById('product-name-input');
const productImgInput = document.getElementById('product-img-input');
const productDescriptionInput = document.getElementById('product-description-input');
const addProductBtn = document.getElementById('add-product-btn');
const productsTemplate = document.getElementById('product-template');
const productsContainer = document.getElementById('products-container');

const products = [];

const addProduct = (product) => {
  products.push(product);
  localStorage.setItem(productsStorageKey, JSON.stringify(products));
  const newProductElement = productsTemplate.content.cloneNode(true);
  newProductElement.querySelector('.card-title').innerText = product.name;
  newProductElement.querySelector('.card-img-top').src = product.img;
  newProductElement.querySelector('.card-img-top').alt = product.name;
  newProductElement.querySelector('.card-text').innerText = product.description;
  productsContainer.appendChild(newProductElement);
  productNameInput.value = '';
  productImgInput.value = '';
  productDescriptionInput.value = '';
}

if (localStorage.getItem(productsStorageKey)) {
  const productsInStorage = JSON.parse(localStorage.getItem(productsStorageKey));
  productsInStorage.forEach(product => addProduct(product));
}

addProductBtn.addEventListener('click', () => {
  const name = productNameInput.value;
  const img = productImgInput.value;
  const description = productDescriptionInput.value;
  if (!name || !img || !description) {
    alert('Todos los campos son obligatorios');
    return;
  }
  addProduct({
    name: name,
    img: img,
    description: description
  })
});