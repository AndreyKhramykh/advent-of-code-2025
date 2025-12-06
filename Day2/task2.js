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
		const str = String(num)
		const len = str.length

		for (let size = 1; size <= len / 2; size++) {
			const chunk = str.slice(0, size)

			let valid = true
			for (let pos = size; pos < len; pos += size) {
				if (str.slice(pos, pos + size) !== chunk) {
					valid = false
					break
				}
			}

			if (valid) return true
		}

		return false
	}

	function getInvalidID(data) {
		data.forEach((range) => {
			for (let id = +range.start; id <= +range.end; id++) {
				if (isInvalidID(id)) {
					resultArray.push(id)
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
