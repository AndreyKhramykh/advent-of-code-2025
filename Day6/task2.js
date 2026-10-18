const fs = require('node:fs')
const path = require('node:path')
const samplePath = path.join(__dirname, '../sample.txt')
const fullPath = path.join(__dirname, '../full.txt')
const data = fs.readFileSync(fullPath, 'utf-8')

// Solution

function getResult(arg) {
	const lines = data.split('\n')
	const lineLength = lines[0].length
	const number = lines.slice(0, -1)
	const symbols = lines[lines.length - 1]

	let total = 0
	let numbers = []
	let operator = null

	const getTotal = () => {
		if (numbers.length === 0) return
		total +=
			operator === '+'
				? numbers.reduce((a, b) => a + b, 0)
				: numbers.reduce((a, b) => a * b, 1)
		numbers = []
		operator = null
	}

	for (let x = 0; x < lineLength; x++) {
		const digits = number
			.map((row) => row[x])
			.join('')
			.trim()

		console.log('digits =', Number(digits))

		if (digits === '') {
			getTotal()
			continue
		}

		numbers.push(Number(digits))

		const op = symbols[x]
		if (op === '+' || op === '*') operator = op
	}
	getTotal()

	return total
}

// Answer

console.log(getResult(data))
