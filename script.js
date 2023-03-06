let buttons = Array.from(document.getElementsByClassName('math'));
buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		document.getElementById('lowest').textContent += btn.textContent;
	});
});

let clr = document.getElementById('clear');
clr.addEventListener('click', () => {
	document.getElementById('oldest').textContent = '';
	document.getElementById('lowest').textContent = '';
	document.getElementById('equal').textContent = '';
});

let mathSign = Array.from(document.getElementsByClassName('doing'));
mathSign.forEach(mth => {
	mth.addEventListener('click', () => {
		let tis = document.getElementById('lowest').textContent;
		document.getElementById('oldest').innerHTML = `${tis} ${mth.textContent}`;
		document.getElementById('lowest').textContent = '';
		firstInt = parseInt(tis);
		signForCounting = mth.textContent;
	});
});

let dle = document.getElementById('del');
dle.addEventListener('click', () => {
	let low = document.getElementById('lowest').textContent;
	document.getElementById('lowest').textContent = low.slice(0, -1);
	if (document.getElementById('lowest').textContent === '') {
		document.getElementById('lowest').textContent = '0';
	}
});

let signForCounting = '';
let firstInt = '';
let secondInt = '';

function addition(a, b) {
	document.getElementById('lowest').innerHTML = a + b;
}

function subst(a, b) {
	document.getElementById('lowest').innerHTML = a - b;
}

function multiply(a, b) {
	document.getElementById('lowest').innerHTML = a * b;
}

function divide(a, b) {
	if(b !== 0){
	document.getElementById('lowest').innerHTML = a / b;
	}
}

let equaly = document.getElementById('equality');
equaly.addEventListener('click', () => {
	secondInt = document.getElementById('lowest').textContent;
	if (signForCounting === "+") {
		addition(firstInt, secondInt);
	} else if (signForCounting === "-") {
		subst(firstInt, secondInt);
	} else if (signForCounting === "*") {
		multiply(firstInt, secondInt);
	} else if (signForCounting === "/") {
		divide(firstInt, secondInt);
	}
	document.getElementById('oldest').innerHTML += `\t ${secondInt}`;
	document.getElementById('equal').textContent = '=';
});