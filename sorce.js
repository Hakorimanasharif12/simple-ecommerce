// Dark/Light mode toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙'; // Update button icon
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset to first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Image hover effect
const productImages = document.querySelectorAll('.product-image');

productImages.forEach(image => {
    const originalSrc = image.src;
    const hoverSrc = image.getAttribute('data-hover');

    image.addEventListener('mouseenter', () => {
        image.src = hoverSrc;
    });

    image.addEventListener('mouseleave', () => {
        image.src = originalSrc;
    });
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = 0;

// Update cart count
function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
}

// Update cart modal with items
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <span>${item.price} RWF</span>
            <span>Qty: ${item.quantity}</span>
            <button class="remove-item">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        // Remove item functionality
        itemElement.querySelector('.remove-item').addEventListener('click', () => {
            cart = cart.filter(cartItem => cartItem.name !== item.name);
            totalPrice -= item.price * item.quantity;
            localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
            updateCartCount();
            updateCartModal();
        });
    });

    // Update total price
    document.getElementById('cartTotal').innerText = `${totalPrice} RWF`;
}

// Add event listener to all "Cart" buttons
const cartButtons = document.querySelectorAll('.product-buttons button:first-child');
cartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = parseFloat(productCard.querySelector('.price').innerText.replace('RWF', '').trim());
        const productImgSrc = productCard.querySelector('.product-image img').src;

        // Check if product already in the cart
        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1; // Increase quantity if already in cart
        } else {
            // Add new product to the cart
            cart.push({ name: productName, price: productPrice, image: productImgSrc, quantity: 1 });
        }

        totalPrice += productPrice; // Update total price
        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
        updateCartCount(); // Update the cart icon count
        updateCartModal(); // Update modal
    });
});

// Show/Hide cart modal on cart icon click
document.getElementById('cartIcon').addEventListener('click', () => {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
    updateCartModal(); // Refresh cart modal when opened
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert when clicking on contact information
document.querySelector('#contact').addEventListener('click', function () {
    alert('You can reach me at your.email@example.com or call me at +250 your phone number!');
});

// Clear Cart functionality
document.getElementById('clearCart').addEventListener('click', () => {
    cart = [];
    totalPrice = 0;
    localStorage.removeItem('cart'); // Clear cart from local storage
    updateCartCount();
    updateCartModal();
});

// Load cart from local storage on page load
window.addEventListener('load', () => {
    updateCartCount();
    updateCartModal();
});
