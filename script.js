// LOGIN PAGE VARIABLE
const correctPin = 1234;
const inpBox = document.querySelector('.form-otp');
const wrongPas = document.querySelector('#fail');
const rightPas = document.querySelector('#success');

// ATM OPTIONS PAGE


const LoginPage = document.querySelector("#login-page");
const atmOptions = document.querySelector("#atm-options");

//          BALANCE 

let Amount = 10000;
const showBal = document.querySelector("#showBal");
const Balance = document.querySelector('.Balance');
console.log(Balance);


// WITHDRAW
const ShowWithdraw = document.querySelector("#ShowWithdraw")
// console.log(inpBox.children);


// DEPOSITE

const DepositShow = document.querySelector("#Deposit-Show");

const pinBox = inpBox.children;
// console.log(pinBox);

let HandleDialbtn = (num) => {

    for (let i = 0; i < pinBox.length; i++) {
        const pinInp = pinBox[i];
        if (!pinInp.value) {
            pinInp.value = num;
            break;
        }
    }

}

// let removePin = (num)=> {
//     for (let i = 0; i < pinBox.length; i++) {
//         const pinInp = pinBox[i];
//         if (!pinInp.value == num) {
//             pinBox.value = "";
//             break;
//         }
//     }
// }

let removePin = () => {
    for (let i = pinBox.length - 1; i >= 0; i--) {
        if (pinBox[i].value) {
            pinBox[i].value = "";
            break;
        }
    }
}
const checkPin = () => {
    const userPin = pinBox[0].value + pinBox[1].value + pinBox[2].value + pinBox[3].value;
    console.log(userPin);

    if (userPin == correctPin) {
        rightPas.classList.remove('hide');
        rightPas.classList.add('show');
        // rightPas.className = "show";
        LoginPage.className = "d-none";
        atmOptions.classList.remove('d-none');

    } else {
        // wrongPas.classList.add('hide');
        // wrongPas.classList.add('show');
        wrongPas.className = "show";
    }

    // pinBox.value = ""
};
// console.log(inpBox.textContent);

let CheckBal = () => {
    atmOptions.classList.add('d-none');
    showBal.classList.remove('d-none')
    Balance.textContent = Amount;
}


let WithdrawPage = () => {
    atmOptions.classList.add('d-none');
    // ShowWithdraw.classList.remove('d-none');
    let userWidthdrawA = +prompt("Enter Your Withdraw Amout.");
    let TotalAmount = Amount - userWidthdrawA;

    showBal.classList.remove('d-none');
    Balance.textContent = TotalAmount;
    console.log(userWidthdrawA);
    console.log(typeof userWidthdrawA);

};

let DepositPage = () => {
    atmOptions.classList.add('d-none');
    let userDeposit = +prompt("Enter Your Withdraw Amout.");
    let TotalAmount = Amount + userDeposit;

    showBal.classList.remove('d-none');
    Balance.textContent = TotalAmount;

};





