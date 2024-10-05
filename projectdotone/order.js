// Array to hold order history
const orderHistory = [];

// Function to handle order form submission
document.getElementById('orderForm').onsubmit = function(event) {
    event.preventDefault();

    const tableNumber = document.getElementById('tableNumber').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const orderDate = document.getElementById('orderDate').value;
    const orderTime = document.getElementById('orderTime').value;

    const order = {
        tableNumber,
        contactNumber,
        orderDate,
        orderTime
    };

    orderHistory.push(order);
    displayOrders();
    this.reset(); // Reset form
};

// Function to display orders in order history
function displayOrders() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = ''; // Clear previous orders

    orderHistory.forEach((order, index) => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order-item mb-3 p-3 border';
        orderDiv.innerHTML = `
            <h5>Order #${index + 1}</h5>
            <p>Table Number: ${order.tableNumber}</p>
            <p>Contact Number: ${order.contactNumber || 'N/A'}</p>
            <p>Date: ${order.orderDate}</p>
            <p>Time: ${order.orderTime}</p>
        `;
        orderList.appendChild(orderDiv);
    });
}
