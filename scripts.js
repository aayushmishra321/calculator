let currentInput = '';
let previousInput = '';
let operator = '';

function appendToDisplay(value) {
    if (currentInput.length < 16) { // Limit the length of input
        currentInput += value;
        document.getElementById('display').innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').innerText = '0';
}

function setOperator(op) {
    if (currentInput === '') return; // Prevent setting operator if input is empty
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || previousInput === '' || operator === '') return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        default:
            result = 'Error';
    }

    document.getElementById('display').innerText = result;
    currentInput = result.toString();
    operator = '';
}
