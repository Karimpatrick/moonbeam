document.addEventListener('DOMContentLoaded', function() {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const likeButtons = document.querySelectorAll('.like');
    const removeButtons = document.querySelectorAll('.remove');
    const quantityElements = document.querySelectorAll('.quantity');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 10; // Initial total price
  
    // Update total price function
    function updateTotalPrice() {
      totalPriceElement.textContent = `$${totalPrice}`;
    }
  
    // Increment quantity
    incrementButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const quantity = parseInt(quantityElements[index].textContent);
        quantityElements[index].textContent = quantity + 1;
        totalPrice += 10; // Assuming each item costs $10
        updateTotalPrice();
      });
    });
  
    // Decrement quantity
    decrementButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const quantity = parseInt(quantityElements[index].textContent);
        if (quantity > 1) {
          quantityElements[index].textContent = quantity - 1;
          totalPrice -= 15; // Assuming each item costs $15
          updateTotalPrice();
        }
      });
    });
  
    // Like button
    likeButtons.forEach(button => {
      button.addEventListener('click', function() {
        button.classList.toggle('liked');
      });
    });
  
    // Remove button
    removeButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const quantity = parseInt(quantityElements[index].textContent);
        totalPrice -= quantity * 15; // Assuming each item costs $10
        updateTotalPrice();
        button.parentElement.parentElement.remove(); // Remove item from the DOM
      });
    });
  });
  