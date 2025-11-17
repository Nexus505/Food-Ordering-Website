// Cart data
let cart = [];

// Add item to the cart
function addToCart(itemName, itemPrice) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCartDisplay();
    alert(`${itemName} added to your cart!`);
}

// Update cart display in the navigation bar
function updateCartDisplay() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
    updateCartModal();
}

// Toggle cart modal visibility
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
    updateCartModal();
}

// Update cart modal content
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
    });
    cartTotal.innerText = total.toFixed(2);
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase!');
    cart = [];
    updateCartDisplay();
    toggleCart();
}

function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div style="display: flex; align-items: center;">
                <img src="food_${item.name}.png" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 8px; margin-right: 10px;">
                <span>${item.name}</span>
            </div>
            <div>
                <span>$${item.price * item.quantity}</span>
                <span> (x${item.quantity})</span>
            </div>
        `;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
    });
    cartTotal.innerText = total.toFixed(2);
}

