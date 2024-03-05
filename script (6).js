function loadPage(page) {
    var content = document.getElementById('content');

    // You can load content dynamically based on the page parameter
    switch (page) {
        case 'home':
            content.innerHTML = "<h2>Home</h2><p>Welcome to the home page!</p>";
            break;
        case 'categories':
            content.innerHTML = "<h2>Categories</h2><p>Explore our diverse range of categories.</p>";
            break;
        case 'about':
            content.innerHTML = "<h2>About</h2><p>Learn more about our blog and mission.</p>";
            break;
        case 'contact':
            content.innerHTML = "<h2>Contact</h2><p>Get in touch with us!</p>";
            break;
        default:
            content.innerHTML = "<h2>Page Not Found</h2><p>Sorry, the page you're looking for does not exist.</p>";
    }
}
