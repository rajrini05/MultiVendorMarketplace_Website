document.getElementById('address-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const address = document.getElementById('address').value;
    localStorage.setItem('address', address);
    window.location.href = 'confirmation.html';
});
