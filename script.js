// Object to store tally of items
let itemTally = {
    apple: 0,
    milk: 0,
    yogurt: 0
};

// Function to add order
function addOrder() {
    let appleCheckbox = document.getElementById("appleCheckbox");
    let milkCheckbox = document.getElementById("milkCheckbox");
    let yogurtCheckbox = document.getElementById("yogurtCheckbox");

    // Increment tally for selected items
    if (appleCheckbox.checked) {
        itemTally.apple++;
    }
    if (milkCheckbox.checked) {
        itemTally.milk++;
    }
    if (yogurtCheckbox.checked) {
        itemTally.yogurt++;
    }

    displayOrders();
    // Reset checkboxes
    appleCheckbox.checked = false;
    milkCheckbox.checked = false;
    yogurtCheckbox.checked = false;
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
