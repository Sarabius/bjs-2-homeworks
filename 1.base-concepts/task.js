"use strict"

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	let arr = [];

	if (d > 0) {
		let one = (-b + Math.sqrt(d)) / (2 * a);
		let two = (-b - Math.sqrt(d)) / (2 * a);
		arr = [one, two];
	} else if (d === 0) {
		let one = -b / (2 * a);
		arr = [one, ];
	} else if (d < 0) {
		arr = [];
	}
	return arr;
};
console.log(solveEquation(a, b, c));

function calcTotalMortgage(percent, contribution, amount, countMonths) {
	let rate = percent / 100;
	let s = amount - contribution;
	let p = rate / 12;
	let monthPay = s * (p + (p / (Math.pow((1 + p), countMonths) - 1)));
	let sum = monthPay * countMonths;
	return sum.toFixed(2);
}
console.log(calcTotalMortgage(percent, contribution, amount, countMonths))