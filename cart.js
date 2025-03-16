document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        cart.forEach(item => {
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <button class="remove-btn" data-name="${item.name}">Remove</button>
                </div>`;
        });

        // Remove item functionality
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const nameToRemove = e.target.getAttribute('data-name');
                cart = cart.filter(item => item.name !== nameToRemove);
                localStorage.setItem('cart', JSON.stringify(cart));
                location.reload();
            });
        });
    }

    // Checkout Button Event
    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Proceeding to checkout...');
        localStorage.removeItem('cart'); // Clear cart after checkout
        location.href = 'checkout.html';
    });
});
