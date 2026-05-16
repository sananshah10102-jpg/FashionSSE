const form = document.getElementById('checkoutForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  successMessage.innerHTML = 'Your order has been placed successfully!';

  form.reset();
});