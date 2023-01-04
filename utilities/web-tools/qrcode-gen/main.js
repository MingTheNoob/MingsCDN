var showQrCode = document.getElementById("showQrCode");
var userInput = document.getElementById("qrcode-inputBox");
var submitQrCode = document.getElementById("submitQrCode");
var link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

submitQrCode.addEventListener("click", function () {
    if (userInput.value != "") {
        submitQrCode.innerText = "Success";
        showQrCode.innerHTML = `<img class="styleQr" src=${link + userInput.value}>`;
    }

    if (userInput.value == "") {
        submitQrCode.innerText = "Error";
        showQrCode.innerHTML = ``;
    }

    userInput.value.innerText = " ";
});