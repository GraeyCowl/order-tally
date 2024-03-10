// Array to store orders
let orders = [];

// Function to add order
function addOrder() {
    let orderInput = document.getElementById("orderInput");
    let order = orderInput.value.trim();

    if (order !== "") {
        orders.push(order);
        displayOrders();
        orderInput.value = "";
    } else {
        alert("Please enter a valid order.");
    }
}

// Function to display orders
function displayOrders() {
    let ordersList = document.getElementById("orders");
    ordersList.innerHTML = "";

    for (let i = 0; i < orders.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = orders[i];
        ordersList.appendChild(listItem);
    }
}
