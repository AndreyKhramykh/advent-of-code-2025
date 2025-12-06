function getResult(arg) {
	const resultArray = []

	function getData(data) {
		return data
			.split('\n')
			.join('')
			.split(',')
			.map((range) => {
				const identificators = range.split('-')
				return {
					start: identificators[0],
					end: identificators[identificators.length - 1],
				}
			})
	}
	function isInvalidID(num) {
		const string = String(num)
		const length = string.length
		if (length % 2 != 0) return false
		const half = length / 2
		const part1 = +string.slice(0, half)
		const part2 = +string.slice(half)
		return part1 == part2
	}
	function getInvalidID(data) {
		data.forEach((range) => {
			for (let i = +range.start; i <= +range.end; i++) {
				if (isInvalidID(i)) {
					resultArray.push(i)
				}
			}
		})
	}
	getInvalidID(getData(arg))
	
	// GET RESULT
	const result = resultArray.reduce((acc, curr) => acc + curr)
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
