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
let cart = [];
let totalPrice = 0;

// Add event listener to all "Cart" buttons
const cartButtons = document.querySelectorAll('.product-buttons button:first-child');
cartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = parseFloat(productCard.querySelector('.price').innerText.replace('RWF', '').trim());
        const productImgSrc = productCard.querySelector('.product-image img').src;

        // Add to cart
        cart.push({ name: productName, price: productPrice, image: productImgSrc });
        totalPrice += productPrice;

        // Update cart count and total price
        document.getElementById('cartCount').innerText = cart.length;
        updateCartModal();
    });
});

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
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Update total price
    document.getElementById('cartTotal').innerText = `${totalPrice} RWF`;
}

// Show/Hide cart modal on cart icon click
document.getElementById('cartIcon').addEventListener('click', () => {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
});
document.querySelectorAll('.dropdown .category').forEach(item => {
    item.addEventListener('click', function(event) {
        // Close all dropdowns before opening the clicked one
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.style.display = 'none';
        });

        // Toggle the current dropdown
        let dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

        event.stopPropagation();
    });
});

// Close dropdowns if clicking outside of the menu
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content').forEach(menu => {
        menu.style.display = 'none';
    });
});

// Add to cart functionality
cartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = parseFloat(productCard.querySelector('.price').innerText.replace('RWF', '').trim());
        const productImgSrc = productCard.querySelector('.product-image').src;

        // Add to cart
        cart.push({ name: productName, price: productPrice, image: productImgSrc, quantity: 1 }); // Add quantity
        totalPrice += productPrice;

        // Update cart count and total price
        document.getElementById('cartCount').innerText = cart.length;
        document.getElementById('cartCount').style.display = 'block'; // Show cart count badge
        updateCartModal();
    });
});
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

        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
        updateCartIcon(); // Update the cart icon count
    });
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
    
    


