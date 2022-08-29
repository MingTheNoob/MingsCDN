function getQRCode() {
    var user_input = document.getElementById("inputBox").value;
    const link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + user_input;
    document.getElementById("showQrCode").innerHTML = `<img class="styleQr" src=${link}>`;
    user_input.innerText = " ";
}