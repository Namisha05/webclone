function increment() {
    var counterElement = document.getElementById('counter');
    var currentValue = parseInt(counterElement.innerText);

    // Check if the currentValue is less than 12
    if (currentValue < 12) {
        var newValue = currentValue + 1;
        counterElement.innerText = newValue;
        updateValue(newValue);
    }
}

function decrement() {
    var counterElement = document.getElementById('counter');
    var currentValue = parseInt(counterElement.innerText);

    // Check if the currentValue is greater than 2
    if (currentValue > 2) {
        var newValue = currentValue - 1;
        counterElement.innerText = newValue;
        updateValue(newValue);
    }
}

function updateValue(value) {
    var paymentCheckbox = document.getElementById('payment');
    var totalPrice;

    if (paymentCheckbox.checked) {
        totalPrice = 12 * value;
    } else {
        totalPrice = 14 * value;
    }

    document.getElementById('price2').textContent = '$' + totalPrice;
}

function changeValue() {
    var paymentCheckbox = document.getElementById('payment');
    var price1 = document.getElementById('price1');
    var price2 = document.getElementById('price2');

    if (paymentCheckbox.checked) {
        price1.textContent = '$10';
        price2.textContent = '$24';
    } else {
        price1.textContent = '$12';
        price2.textContent = '$28';
    }
}
