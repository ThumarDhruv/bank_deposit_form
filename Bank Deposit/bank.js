function calculateDeposit(event) {
    event.preventDefault();

    
    const customerId = document.getElementById('customerId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseInt(document.getElementById('years').value);

    
    const interestAmount = (principal * rate * years) / 100;
    const maturityAmount = principal + interestAmount;
    const taxAmount = maturityAmount * 0.05;
    const totalAmount = maturityAmount - taxAmount;

    document.getElementById('displayCustomerId').textContent = customerId;
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayPrincipal').textContent = principal.toFixed(2);
    document.getElementById('displayInterest').textContent = interestAmount.toFixed(2);
    document.getElementById('displayMaturity').textContent = maturityAmount.toFixed(2);
    document.getElementById('displayTax').textContent = taxAmount.toFixed(2);
    document.getElementById('displayTotal').textContent = totalAmount.toFixed(2);

    const depositData = {
        customerId,
        name,
        email,
        principal,
        rate,
        years,
        interestAmount,
        maturityAmount,
        taxAmount,
        totalAmount
    };

    localStorage.setItem('depositData', JSON.stringify(depositData));

    document.getElementById('result').style.display = 'block';
}


window.onload = function() {
    const savedData = localStorage.getItem('depositData');
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('customerId').value = data.customerId;
        document.getElementById('name').value = data.name;
        document.getElementById('email').value = data.email;
        document.getElementById('principal').value = data.principal;
        document.getElementById('rate').value = data.rate;
        document.getElementById('years').value = data.years;
    }
};