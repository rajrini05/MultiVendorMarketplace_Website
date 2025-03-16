document.addEventListener('DOMContentLoaded', () => {
    console.log("Marketplace loaded!");

    // Handle active state in navigation links
    const links = document.querySelectorAll('nav a');
    const currentLocation = window.location.href;

    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
