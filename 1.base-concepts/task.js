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
	}
	return arr
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let rate = percent / 100;
	let bodyCredit = amount - contribution;
	let monthPercent = rate / 12;
	let monthPay = bodyCredit * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), countMonths) - 1)));
	let sum = monthPay * countMonths;
	return +sum.toFixed(2);
};