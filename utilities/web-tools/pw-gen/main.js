const pwEl = document.getElementById("pw");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy-pw");
const successEl = document.getElementById("success-pw");
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

copyEl.setAttribute("data-clipboard-text", pwEl.innerText);
new ClipboardJS('#copy-pw');

generateEl.addEventListener("click", getNewPw);
function getNewPw() {
	setTimeout(function(){
		copyEl.setAttribute("data-clipboard-text", pwEl.innerText);
	}, 100);
	successEl.innerHTML = "";
};
copyEl.addEventListener("click", function() {
	successEl.classList.add("text-success");
	successEl.innerHTML = "Copied! <i class='ri-check-fill'></i>";
});

function getLowercase() {
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateX() {
	const xs = [];
	if (upperEl.checked) {
		xs.push(getUppercase());
	}
	if (lowerEl.checked) {
		xs.push(getLowercase());
	}
	if (numberEl.checked) {
		xs.push(getNumber());
	}
	if (symbolEl.checked) {
		xs.push(getSymbol());
	}
	if (xs.length === 0) return "";
	return xs[Math.floor(Math.random() * xs.length)];
}

function generatePassword() {
	const len = lenEl.value;

	if (len < 4 || len > 32) {
		alert("never gonna give you up");
		pwEl.innerText = "";
	} else {
		let password = "";

		if (upperEl.checked) password += getUppercase();

		if (lowerEl.checked) password += getLowercase();

		if (numberEl.checked) password += getNumber();

		if (symbolEl.checked) password += getSymbol();

		for (let i = password.length; i < len; i++) {
			const x = generateX();
			password += x;
		}

		pwEl.innerText = password;
	}
	if (!upperEl.checked && !lowerEl.checked && !numberEl.checked && !symbolEl.checked) {
		pwEl.innerHTML = `<i>Please select at least one option...</i>`;
	}
}

generateEl.addEventListener("click", generatePassword);

var upperLabel = document.getElementById("upperLabel");
var lowerLabel = document.getElementById("lowerLabel");
var numberLabel = document.getElementById("numberLabel");
var symbolLabel = document.getElementById("symbolLabel");

upperEl.addEventListener("click", function () {
	if (upperEl.checked) {
		upperLabel.classList.remove("pw-unchecked");
		upperLabel.classList.add("pw-checked");
	} else {
		upperLabel.classList.remove("pw-checked");
		upperLabel.classList.add("pw-unchecked");
	}
});

lowerEl.addEventListener("click", function () {
	if (lowerEl.checked) {
		lowerLabel.classList.remove("pw-unchecked");
		lowerLabel.classList.add("pw-checked");
	} else {
		lowerLabel.classList.remove("pw-checked");
		lowerLabel.classList.add("pw-unchecked");
	}
});

numberEl.addEventListener("click", function () {
	if (numberEl.checked) {
		numberLabel.classList.remove("pw-unchecked");
		numberLabel.classList.add("pw-checked");
	} else {
		numberLabel.classList.remove("pw-checked");
		numberLabel.classList.add("pw-unchecked");
	}
});

symbolEl.addEventListener("click", function () {
	if (symbolEl.checked) {
		symbolLabel.classList.remove("pw-unchecked");
		symbolLabel.classList.add("pw-checked");
	} else {
		symbolLabel.classList.remove("pw-checked");
		symbolLabel.classList.add("pw-unchecked");
	}
});