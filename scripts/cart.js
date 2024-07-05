// Example of adding items to the cart and calculating the total
document.addEventListener('DOMContentLoaded', function () {
  const cartItems = [];
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotalElement = document.getElementById('cartTotal');
  
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function () {
          const productCard = button.parentElement;
          const productName = productCard.querySelector('h4').innerText;
          const productPrice = parseFloat(productCard.querySelector('p').innerText.replace('$', ''));
          
          const cartItem = { name: productName, price: productPrice };
          cartItems.push(cartItem);
          updateCart();
      });
  });

  function updateCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
      cartItems.forEach(item => {
          const cartItemElement = document.createElement('div');
          cartItemElement.className = 'cart-item';
          cartItemElement.innerText = `${item.name} - $${item.price.toFixed(2)}`;
          cartItemsContainer.appendChild(cartItemElement);
          total += item.price;
      });
      cartTotalElement.innerText = total.toFixed(2);
  }
});
