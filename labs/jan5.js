
const drawLine = (n) => {
	let string = [];
	for (let i = 0; i < n; i++) {
		string.push('_')
	}
	return string.join('')
}

const drawTopBorder = (n) => {
	let string = [];
	for (let i = 0; i < n + 2; i++) {
		if (i === 0 ) {
			string.push('┏')
		} else if (i === n+1) {
			string.push('┓')
		} else {
			string.push('━')
		}
	}
	return string.join('')
}
const drawMiddleBorder = (n) => {
	let string = [];
	for (let i = 0; i < n + 2; i++) {
		if (i === 0 ) {
			string.push('┣')
		} else if (i === n+1) {
			string.push('┫')
		} else {
			string.push('━')
		}
	}
	return string.join('')
}
const drawBottomBorder = (n) => {
	let string = [];
	for (let i = 0; i < n + 2; i++) {
		if (i === 0 ) {
			string.push('┗')
		} else if (i === n+1) {
			string.push('┛')
		} else {
			string.push('━')
		}
	}
	return string.join('')
}
const drawNameWithBorder = (maxLength, name) => {
	let remainder = maxLength - name.length
	let string = [];
	string.push('┃')
	string.push(name)
	for (let i = 0; i < remainder; i++) {
		string.push(' ')
	}
	string.push('┃')
	return string.join('')
}

// console.log(drawTopBorder(4)) // ┌────┐
// console.log(drawTopBorder(0)) // ┌┐
// console.log(drawMiddleBorder(4)) // |----|
// console.log(drawMiddleBorder(0)) // |-|
// console.log(drawBottomBorder(4)) // |____|

// ┏━━━━━━━━━━━━━━━━┓
// ┃Jon Snow        ┃
// ┣━━━━━━━━━━━━━━━━┫
// ┃Cersei Lannister┃
// ┗━━━━━━━━━━━━━━━━┛

const array = process.argv.slice(2) // [ 'Jon Snow', 'Cersei Lannister' ]
// array.forEach(str => {
// 	console.log(str.length)
// })
let maxLength = 0
array.forEach(x => {
	if (x.length > maxLength) {
		maxLength = x.length
	}
})
// console.log(maxLength)
console.log(drawTopBorder(maxLength))
console.log(drawNameWithBorder(maxLength, array[0]))
console.log(drawMiddleBorder(maxLength))
console.log(drawNameWithBorder(maxLength, array[1]))
console.log(drawBottomBorder(maxLength))