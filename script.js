let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');
btns.forEach(function (btn) {
	btn.addEventListener('click', function (event) {
		const styles = event.currentTarget.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('increase')) {
			count ++;
		} else {
			count = 0;
		}
		value.textContent = count;
		if (count < 0) {
			value.style.color = 'red';
		} else if (count > 0) {
			value.style.color = 'green';
		} else {
			value.style.color = '#222';
		}
	});
});
