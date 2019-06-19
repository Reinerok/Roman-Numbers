const romanNumerals = {
	1: 'I', 5: 'V',
	10: 'X', 50: 'L',
	100: 'C', 500: 'D',
	1000: 'M', 5000: 'V̅',
	10000: 'X̅', 50000: 'L̅',
	100000: 'C̅', 500000: 'D̅',
	1000000: 'M̅'
};

function arabNum(number) {
	let changeNumber = '';
	number = number.toString();

	for (let i = 0; i <= number.length; i++) {
		if (number[i] == 9 || number[i] == 4) {
			//Для 9 и 4 
			changeNumber += romanNumerals[1 * (10 ** (number.length - i - 1))] + 
			romanNumerals[(number[i] == 9 ? 1 : 5) * (10 ** (number.length - i - (number[i] == 4 ? 1 : 0)))];
		} else if (number[i] > 5 && number[i] < 9) {
			changeNumber += romanNumerals[5 * (10 ** (number.length - i - 1))] + 
			romanNumerals[1 * 10 ** (number.length - i - 1)].repeat(number[i] - 5);
		} else if (number[i] > 0 && number[i] < 4) {
			changeNumber += romanNumerals[1 * 10 ** (number.length - i - 1)].repeat(number[i]);
		} else if (number[i] == 5) {
			changeNumber += romanNumerals[5 * 10 ** (number.length - i - 1)];
		}
	}

	return changeNumber;
}

function change() {
	let number = document.getElementById('number').value;

	if(number && number > 0 && number < 4000000) {
		document.getElementById('numberChange').textContent = arabNum(number);
	} else {
		document.getElementById('numberChange').textContent = "";
	}
}

document.getElementById('add').addEventListener('click', change);
document.getElementById('number').addEventListener('keydown', e => {

	if(e.keyCode === 13) {
		e.preventDefault();
		change();
	}
})

