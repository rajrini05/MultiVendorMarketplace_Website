document.querySelectorAll('.vendor-card').forEach(card => {
    card.addEventListener('click', () => {
        const itemName = card.querySelector('h3').innerText;
        const itemImage = card.querySelector('img').src;

        const item = { name: itemName, image: itemImage };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${itemName} added to cart!`);
    });
});
