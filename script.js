// Object to store tally of items
let itemTally = {};

// Function to add order
function addOrder() {
    let orderInput = document.getElementById("orderInput");
    let order = orderInput.value.trim();

    if (order !== "") {
        // Extracting item from order
        let item = order.toLowerCase();

        // Incrementing tally for the item
        if (itemTally[item]) {
            itemTally[item]++;
        } else {
            itemTally[item] = 1;
        }

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

    for (let item in itemTally) {
        let listItem = document.createElement("li");
        listItem.classList.add("orderItem");
        listItem.textContent = `${item}: ${itemTally[item]}`;
        ordersList.appendChild(listItem);
    }
}
