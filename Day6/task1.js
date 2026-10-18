const fs = require('node:fs')
const path = require('node:path')
const samplePath = path.join(__dirname, '../sample.txt')
const fullPath = path.join(__dirname, '../full.txt')
const data = fs.readFileSync(fullPath, 'utf-8')

// Solution

function getResult(arg) {
	const convertedData = arg
		.split('\n')
		.map((row) => row.split(' ').filter((elem) => elem.length != 0))

	const numbers = convertedData.slice(0, -1)
	const symbols = convertedData[convertedData.length - 1]

	const result = symbols.map((symbol, index) => {
		return {
			values: numbers.map((row) => Number(row[index])),
			symbol,
		}
	})

	function calc({ values, symbol }) {
		return symbol === '+'
			? values.reduce((a, b) => a + b)
			: values.reduce((a, b) => a * b)
	}
	return result.map((row) => calc(row)).reduce((a, b) => a + b)
}

// Answer

console.log(getResult(data))
