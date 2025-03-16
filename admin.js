let productList = [];

document.getElementById('add-product').addEventListener('submit', (e) => {
    e.preventDefault();
    const product = {
        name: document.getElementById('product-name').value,
        price: parseFloat(document.getElementById('product-price').value),
        image: document.getElementById('product-image').value
    };
    productList.push(product);
    renderProductList();
});

function renderProductList() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = productList.map(product => `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <span>${product.name} - $${product.price}</span>
            <button onclick="removeProduct('${product.name}')">Remove</button>
        </div>
    `).join('');
}

function removeProduct(name) {
    productList = productList.filter(p => p.name !== name);
    renderProductList();
}
