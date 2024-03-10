// Object to store tally of items
let itemTally = {
    apple: 0,
    milk: 0,
    yogurt: 0
};

// Function to add order
function addOrder() {
    let appleQuantity = parseInt(document.getElementById("appleQuantity").value);
    let milkQuantity = parseInt(document.getElementById("milkQuantity").value);
    let yogurtQuantity = parseInt(document.getElementById("yogurtQuantity").value);

    // Increment tally for each item
    itemTally.apple += appleQuantity;
    itemTally.milk += milkQuantity;
    itemTally.yogurt += yogurtQuantity;

    displayOrders();
    // Reset input fields
    document.getElementById("appleQuantity").value = 0;
    document.getElementById("milkQuantity").value = 0;
    document.getElementById("yogurtQuantity").value = 0;
}

// Function to display orders
function displayOrders() {
    let ordersList = document.getElementById("orders");
    ordersList.innerHTML = "";

    for (let item in itemTally) {
        if (itemTally[item] > 0) {
            let listItem = document.createElement("li");
            listItem.textContent = `${item}: ${itemTally[item]}`;
            ordersList.appendChild(listItem);
        }
    }
}
