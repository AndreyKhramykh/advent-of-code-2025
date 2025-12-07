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
		let currentDigit = getMaxDigit(string)
		let nextDigit = {}
		const length = string.length
		let result = []

		for (let k = 1; k < 13; k++) {
			// console.log(currentDigit.value, currentDigit.index)
			// console.log(nextDigit.value, nextDigit.index)
			if (currentDigit.index == length - 1) {
				nextDigit = currentDigit
				currentDigit = getMaxDigit(string.slice(0, currentDigit.index))
				// length--
			} else {
				nextDigit = getMaxDigit(string.slice(currentDigit.index + k))
			}
			result.push(currentDigit)
			currentDigit = nextDigit
		}

		return result
	}
	console.log(getJoltage(getData(arg)[2]))

	// let result = getData(arg).map((string) => getJoltage(string)).reduce((acc, curr) => acc + curr)
	// console.log(result)
}

const fs = require('node:fs')

const samplePath = 'sample.txt'
const fullPath = 'full.txt'

fs.readFile(samplePath, 'utf-8', (error, data) => {
	if (error) {
		console.log(`output->error`, error)
	}
	getResult(data)
})
