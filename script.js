let buttons = Array.from(document.getElementsByClassName('math'));
buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		let screen = parseInt(document.getElementById('lowest').textContent);
		if(screen === 0) {
			document.getElementById('lowest').textContent = btn.textContent;
		} else {
			document.getElementById('lowest').textContent += btn.textContent;
		}
	});
});

let clr = document.getElementById('clear');
clr.addEventListener('click', () => {
	document.getElementById('oldest').textContent = '';
	document.getElementById('lowest').textContent = '0';
});
