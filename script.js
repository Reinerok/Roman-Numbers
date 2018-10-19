var latinNumber = [];
latinNumber[0] = '0';
latinNumber[1] = 'I';
latinNumber[2] = 'II';
latinNumber[3] = 'III';
latinNumber[4] = 'IV';
latinNumber[5] = 'V';
latinNumber[6] = 'VI';
latinNumber[7] = 'VII';
latinNumber[8] = 'VIII';
latinNumber[9] = 'IX';
latinNumber[10] = 'X';
latinNumber[20] = 'XX';
latinNumber[30] = 'XXX';
latinNumber[40] = 'XL';
latinNumber[50] = 'L';
latinNumber[60] = 'LX';
latinNumber[70] = 'LXX';
latinNumber[80] = 'LXXX';
latinNumber[90] = 'XC';
latinNumber[100] = 'C';
latinNumber[200] = 'CC';
latinNumber[300] = 'CCC';
latinNumber[400] = 'CD';
latinNumber[500] = 'D';
latinNumber[600] = 'DC';
latinNumber[700] = 'DCC';
latinNumber[800] = 'DCCC';
latinNumber[900] = 'CM';
latinNumber[1000] = 'M';
latinNumber[2000] = 'MM';
latinNumber[3000] = 'MMM';
latinNumber[4000] = 'MV̅';
latinNumber[5000] = 'V̅';
latinNumber[6000] = 'V̅M';
latinNumber[7000] = 'V̅MM';
latinNumber[8000] = 'V̅MMM';
latinNumber[9000] = 'I̅X̅';
latinNumber[10000] = 'X̅';
latinNumber[10000] = 'X̅';
latinNumber[20000] = 'X̅X̅';
latinNumber[30000] = 'X̅X̅X̅';
latinNumber[40000] = 'X̅L̅';
latinNumber[50000] = 'L̅';
latinNumber[60000] = 'L̅X̅';
latinNumber[70000] = 'L̅X̅X̅';
latinNumber[80000] = 'L̅X̅X̅X̅';
latinNumber[90000] = 'X̅C̅';
latinNumber[100000] = 'C̅';
latinNumber[200000] = 'C̅C̅';
latinNumber[300000] = 'C̅C̅C̅';
latinNumber[400000] = 'C̅D̅';
latinNumber[500000] = 'D̅';
latinNumber[600000] = 'D̅C̅';
latinNumber[700000] = 'D̅C̅C̅';
latinNumber[800000] = 'D̅C̅C̅C̅';
latinNumber[900000] = 'C̅M̅';
latinNumber[1000000] = 'M̅';

function arabNum (number) {
	//console.log(number.search(/[а-яa-z]/gi))
	if (number.search(/[а-яa-z]/gi) !== -1)
		{
			return 'Нужно использовать только числа!';
		}
	number = number.split('');
	for (var i = 0; i < number.length; i++) {
		if (number[i] !== '0' ) {
		number[i] = number[i] + '0'.repeat(number.length - i - 1);
		number[i] = latinNumber[number[i]];
		} else {
		number[i] = +number[i];
		}
	}
	return number.filter((a) => a).join('');
}
var addTime = document.getElementById('add');
addTime.addEventListener('click', getN);
function getN() {
  var getNum = document.getElementById('number').value;
  document.getElementById('numberChange').textContent = arabNum(getNum);
}
var input = document.getElementById('number');
input.oninput = function() {
	if ( input.value.search(/[а-яa-z]/gi) !== -1) {
	document.getElementById('result').innerHTML = "Остановись!!!";
	surprize.setAttribute('href', 'surprize.jpg');
} else {
	document.getElementById('result').innerHTML = "";
	surprize.removeAttribute('href');
}
};
