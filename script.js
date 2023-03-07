let buttons = Array.from(document.getElementsByClassName('math'));
buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		if(t.className !== 'mpell') {
		document.getElementById('lowest').textContent += btn.textContent;
		}
	});
});

let clr = document.getElementById('clear');
clr.addEventListener('click', () => {
	document.getElementById('oldest').textContent = '';
	document.getElementById('lowest').textContent = '';
	document.getElementById('equal').textContent = '';
	t.classList.remove('spell');
	t.classList.remove('mpell');
});

let mathSign = Array.from(document.getElementsByClassName('doing'));
mathSign.forEach(mth => {
	mth.addEventListener('click', () => {
		let tis = document.getElementById('lowest').textContent;
		let job = tis.charAt(tis.length - 1);
		if(job !== '' && job !== '.') {
		t.classList.add('spell');
		t.classList.remove('mpell');
		document.getElementById('oldest').innerHTML = `${tis} ${mth.textContent}`;
		document.getElementById('equal').textContent = '';
		document.getElementById('lowest').textContent = '';
		firstInt = +tis;
		signForCounting = mth.textContent;
		}
	});
});

let dle = document.getElementById('del');
dle.addEventListener('click', () => {
	if(t.className !== 'mpell') {
	let low = document.getElementById('lowest').textContent;
	document.getElementById('lowest').textContent = low.slice(0, -1);
	}
});

let signForCounting = '';
let firstInt = '';
let secondInt = '';

function operate(a, b) {
	let answer = '';
	if (signForCounting === "+") {
		answer = a + b;
	} else if (signForCounting === "-") {
		answer = a - b;
	} else if (signForCounting === "*") {
		answer = a * b;
	} else if (signForCounting === "/") {
		if(b !== 0) {
		answer = a / b;
		} else {
			clr.click();
		}
	}
	if (answer % 1 === 0) {
	document.getElementById('lowest').innerHTML = answer;
	} else {
	document.getElementById('lowest').innerHTML = answer.toFixed((answer.toString()).length - 2);
	}
}

let equaly = document.getElementById('equality');
equaly.addEventListener('click', () => {
	if(t.className === 'spell') {
		let tiw = document.getElementById('lowest').textContent;
		let working = tiw.charAt(tiw.length - 1);
		if(working !== '' && working !== '.') {
		secondInt = +tiw;
		
		document.getElementById('oldest').innerHTML += `\t ${secondInt}`;
		document.getElementById('equal').textContent = '=';

		operate(firstInt, secondInt);

		t.classList.remove('spell');
		t.classList.add('mpell');
	    }
	}
});

let floating = document.getElementById('straud');
floating.addEventListener('click', () => {
	if(t.className !== 'mpell') {
		let tin = document.getElementById('lowest').textContent;
		if (!tin.includes('.')) {
			document.getElementById('lowest').textContent += '.';
		}
	}
});

let t = document.getElementById('lowest');
