function getResult(input) {
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
		function getCurrentBlock(string, startIndex, endIndex) {
			return string.slice(startIndex, endIndex)
		}

		function getEndIndex(string) {
			return string.length - batteriesNum + 1
		}
		const BATTERY_COUNT = 12

		let currentString = string
		let currentIndex = 0
		let batteriesNum = BATTERY_COUNT
		const resultArr = []

		while (resultArr.length < BATTERY_COUNT) {
			const currentMaxDigit = getMaxDigit(
				getCurrentBlock(currentString, 0, getEndIndex(currentString)),
			)
			resultArr.push(currentMaxDigit.value)
			currentIndex = currentMaxDigit.index
			batteriesNum -= 1
			currentString = currentString.slice(
				currentIndex + 1,
				currentString.length,
			)
		}

		return Number(resultArr.join(''))
	}

	let result = getData(input)
		.map((string) => getJoltage(string))
		.reduce((acc, curr) => acc + curr)
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
