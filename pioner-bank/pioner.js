//  login button event handelar  //
const loginBtn = document.getElementById('login');

function loginArea() {
    const loginArea = document.getElementById('login-area');
    const login = document.getElementById('password');
    const loginPass = login.value;
    if (loginPass == 1234) {
        loginArea.style.display = 'none';

        const transictionArea = document.getElementById('transiction-area');
        transictionArea.style.display = 'block';
    }else{
        alert("Your Password Incurrect");
    }
}
loginBtn.addEventListener('click', loginArea);


//  deposit button event handelar  //
const depositAmount = document.getElementById('addDeposit');
depositAmount.addEventListener('click', function() {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalAmount = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalAmount;

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = "";
});

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;

    document.getElementById(id).innerText = totalAmount;
}

// withdraw button event handelar //
const withdrawAmount = document.getElementById('addWithdraw');
withdrawAmount.addEventListener('click', function() {
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    // const withdrawValue = document.getElementById('withdrawValue').innerText;
    // const withdrawValueNumber = parseFloat(withdrawValue);
    // const totalWithdraw = withdrawAmountNumber + withdrawValueNumber;
    // document.getElementById('withdrawValue').innerText = totalWithdraw;

    updateSpanValue('withdrawValue', withdrawAmountNumber);
    updateSpanValue('currentBalance', withdrawAmountNumber);

    document.getElementById('withdrawAmount').value = "";
});

function updateSpanValue(id, withdrawAmountNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + withdrawAmountNumber;

    document.getElementById(id).innerText = totalAmount;
}
