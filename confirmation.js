document.addEventListener('DOMContentLoaded', () => {
    const address = localStorage.getItem('address') || "No address provided";
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById('confirmation').innerHTML = `
        <h2>Order Confirmed!</h2>
        <p>Shipping to: ${address}</p>
        <p>Total: $${total.toFixed(2)}</p>
        <img src="images/thank-you.png" alt="Thank You">
        <button onclick="window.location.href='index.html'">Back to Home</button>
    `;

    localStorage.clear();
});
