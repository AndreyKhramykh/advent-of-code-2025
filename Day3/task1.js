function getResult(arg) {
	function getData(data) {
		return data.split('\n')
	}
	function getMaxDigit(string) {
		let maxDigit = 0
		let index = 0
		for (let i = 0, length = string.length; i < length; i++) {
			const digit = string.charCodeAt(i) - 48
			if (digit > maxDigit) {
				maxDigit = digit
				index = i
			}
			if (maxDigit == 9) break
		}
		return { value: maxDigit, index: index }
	}

	function getJoltage(string) {
		let firstDigit = getMaxDigit(string)
		let secondDigit = {}
		const length = string.length

		if (firstDigit.index == length - 1) {
			secondDigit = firstDigit
			firstDigit = getMaxDigit(string.slice(0, firstDigit.index))
		} else {
			secondDigit = getMaxDigit(string.slice(firstDigit.index + 1))
		}
		return Number(String(firstDigit.value) + String(secondDigit.value))
	}

	let result = getData(arg).map((string) => getJoltage(string)).reduce((acc, curr) => acc + curr)
	console.log(result)
}

const fs = require('node:fs')

const samplePath = 'sample.txt'
const fullPath = 'full.txt'

fs.readFile(fullPath, 'utf-8', (error, data) => {
	if (error) {
		console.log(`output->error`, error)
	}
	getResult(data)
})
