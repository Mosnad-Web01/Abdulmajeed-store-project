'use strict';

const STORE_BASE_URL = 'https://fakestoreapi.com';
const CONTAINER = document.querySelector('#productsContainer');
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from local storage or initialize empty array

const autorun = async () => {
  const products = await fetchProducts();
  renderProducts(products);
  updateCartCount();
};

const constructUrl = (path) => {
  return `${STORE_BASE_URL}/${path}`;
};

const fetchProducts = async (category = '') => {
  const url = category ? constructUrl(`products/category/${category}`) : constructUrl(`products`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
};

const fetchProduct = async (productId) => {
  const url = constructUrl(`products/${productId}`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
};

const addToCart = (product) => {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
  updateCartCount();
};

const updateCartCount = () => {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;
};

const renderProducts = (products) => {
  CONTAINER.innerHTML = ''; // Clear container before rendering
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'col-lg-4 col-md-6 mb-4'; // Bootstrap grid classes

    productDiv.innerHTML = `
      <div class="card h-75 shadow-sm border-0 bg-white ">
        <img src="${product.image}" class="card-img-top h-50" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <p class="card-text"><small class="text-muted">${product.category}</small></p>
          <button class="btn btn-primary w-100" data-id="${product.id}">View Details</button>
          <button class="btn btn-success mt-2 w-100 add-to-cart-btn" data-product-id="${product.id}">
            Add to Cart <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>`;

    // Append productDiv to container
    CONTAINER.appendChild(productDiv);

    // Add event listeners for the buttons
    productDiv.querySelector('.btn-primary').addEventListener('click', () => {
      productDetails(product.id);
    });

    productDiv.querySelector('.add-to-cart-btn').addEventListener('click', async (event) => {
      const productId = event.currentTarget.getAttribute('data-product-id');
      try {
        const product = await fetchProduct(productId);
        addToCart(product);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    });
  });
};

const renderProduct = (product) => {
  CONTAINER.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="${product.image}" class="img-fluid h-100" alt="${product.title}">
      </div>
      <div class="col-md-6">
        <h3>${product.title}</h3>
        <p class="lead">$${product.price.toFixed(2)}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p>${product.description}</p>
        <button class="btn btn-success w-100 add-to-cart-btn" data-product-id="${product.id}">
          Add to Cart <i class="bi bi-cart-plus"></i>
        </button>
      </div>
    </div>`;

  // Attach event listener for Add to Cart button
  document.querySelector('.add-to-cart-btn').addEventListener('click', async (event) => {
    const productId = event.currentTarget.getAttribute('data-product-id');
    try {
      const product = await fetchProduct(productId);
      addToCart(product);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  });
};

const productDetails = async (productId) => {
  try {
    const product = await fetchProduct(productId);
    renderProduct(product);
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

const filterByCategory = async (category) => {
  const products = await fetchProducts(category);
  renderProducts(products);
};

const searchProducts = async (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const products = await fetchProducts();
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
};

const showCart = () => {
  const cartContainer = document.createElement('div');
  cartContainer.className = 'container mt-4';
  cartContainer.innerHTML = `
    <h2>Shopping Cart</h2>
    <div class="row" id="cartItemsContainer"></div>
  `;
  CONTAINER.innerHTML = '';
  CONTAINER.appendChild(cartContainer);

  const cartItemsContainer = document.getElementById('cartItemsContainer');
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'col-md-4 mb-4';
      itemDiv.innerHTML = `
        <div class="card">
          <img src="${item.image}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">$${item.price.toFixed(2)}</p>
            <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
          </div>
        </div>`;
      cartItemsContainer.appendChild(itemDiv);
    });
  }
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in local storage
  updateCartCount();
  showCart(); // Refresh the cart display
};

document.addEventListener('DOMContentLoaded', autorun);
