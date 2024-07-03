// Mock data for best-selling and trending products
const bestSellingProducts = [
  { id: 1, name: 'Apple', price: '$1.00', image: 'path-to-apple.jpg' },
  { id: 2, name: 'Banana', price: '$0.50', image: 'path-to-banana.jpg' },
];

const trendingProducts = [
  { id: 3, name: 'Milk', price: '$2.00', image: 'path-to-milk.jpg' },
  { id: 4, name: 'Eggs', price: '$1.50', image: 'path-to-eggs.jpg' },
];

function displayProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear any existing content
  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
      `;
      container.appendChild(productCard);
  });
}

// Display best-selling products
displayProducts(bestSellingProducts, 'bestSellingProducts');

// Display trending products
displayProducts(trendingProducts, 'trendingProducts');
