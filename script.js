function convertCurrency() {
    const amount = parseFloat(document.getElementById("inrAmount").value);
    const currency = document.getElementById("currencySelect").value;
    const resultElement = document.getElementById("result");

    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Please enter a valid amount!";
        return;
    }

    let rate = 0;
    let symbol = "";

    switch (currency) {
        case "USD":
            rate = 0.012;   // Example: 1 INR = 0.012 USD
            symbol = "$";
            break;
        case "EUR":
            rate = 0.011;   // Example: 1 INR = 0.011 EUR
            symbol = "€";
            break;
        case "JPY":
            rate = 1.76;    // Example: 1 INR = 1.76 JPY
            symbol = "¥";
            break;
        case "GBP":
            rate = 0.0095;  // Example: 1 INR = 0.0095 GBP
            symbol = "£";
            break;
    }

    const converted = (amount * rate).toFixed(2);
    resultElement.textContent = `${symbol} ${converted}`;
}