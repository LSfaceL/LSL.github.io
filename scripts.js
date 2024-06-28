document.addEventListener('DOMContentLoaded', function () {
    const cart = [];

    function addToCart(product) {
        cart.push(product);
        alert(`${product.name} added to cart`);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        cartCount.innerText = cart.length;

        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        let totalAmount = 0;

        cart.forEach((item, index) => {
            totalAmount += parseFloat(item.price.substring(1));
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} - ${item.price} <button data-index="${index}">Remove</button>`;
            cartItems.appendChild(listItem);
        });

        document.getElementById('total-amount').innerText = totalAmount.toFixed(2);

        const removeButtons = cartItems.querySelectorAll('button');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const productElement = this.parentElement;
            const product = {
                name: productElement.querySelector('h3').innerText,
                price: productElement.querySelector('p').innerText
            };
            addToCart(product);
        });
    });

    const modal = document.getElementById('cart-modal');
    const cartButton = document.getElementById('cart-button');
    const span = document.getElementsByClassName('close')[0];

    cartButton.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Cart functionality code remains the same

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Thank you, ${name}. Your message has been sent.`);
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Existing cart functionality code
});


document.addEventListener('DOMContentLoaded', function () {
    const cart = [];

    function addToCart(product) {
        cart.push(product);
        alert(`${product.name} added to cart`);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        cartCount.innerText = cart.length;

        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        let totalAmount = 0;

        cart.forEach((item, index) => {
            totalAmount += parseFloat(item.price.substring(1));
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} - ${item.price} <button data-index="${index}">Remove</button>`;
            cartItems.appendChild(listItem);
        });

        document.getElementById('total-amount').innerText = totalAmount.toFixed(2);

        const removeButtons = cartItems.querySelectorAll('button');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }

    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const productElement = this.parentElement;
            const product = {
                name: productElement.querySelector('h3').innerText,
                price: productElement.querySelector('p').innerText
            };
            addToCart(product);
        });
    });

    const modal = document.getElementById('cart-modal');
    const cartButton = document.getElementById('cart-button');
    const span = document.getElementsByClassName('close')[0];

    cartButton.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Thank you, ${name}. Your message has been sent.`);
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});

