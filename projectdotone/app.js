// Sample menu items with categories and quantities
const menuItems = [
    { name: 'Chicken Curry', price: '₹250', image: 'images/image1.jpeg', quantity: 5, category: 'Main Course' },
    { name: 'Paneer Butter Masala', price: '₹300', image: 'images/paneer-butter-masala.jpg', quantity: 0, category: 'Main Course' },
    { name: 'Biryani', price: '₹400', image: 'images/image2.jpeg', quantity: 2, category: 'Main Course' },
    { name: 'Samosa', price: '₹100', image: 'images/image4.jpeg', quantity: 10, category: 'Starters' },
    { name: 'Gulab Jamun', price: '₹150', image: 'images/image3.jpeg', quantity: 8, category: 'Desserts' },
];

// Function to populate menu items
function populateMenu() {
    const menuContainer = document.getElementById('menuItems');
    menuItems.forEach(item => {
        if (item.quantity > 0) { // Show only available items
            const menuItemDiv = document.createElement('div');
            menuItemDiv.className = 'col-md-4 menu-item'; // Bootstrap column for 3 items per row
            menuItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <p>Available: ${item.quantity}</p>
                <button onclick="addToOrder('${item.name}', '${item.price}')" class="btn btn-success">Add to Order</button>
            `;
            menuContainer.appendChild(menuItemDiv);
        }
    });
}

// Initialize the menu on page load
window.onload = populateMenu;

// Function to add to order
function addToOrder(itemName, itemPrice) {
    alert(`${itemName} has been added to your order at a price of ${itemPrice}.`);
}

