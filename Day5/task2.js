const fs = require('node:fs')
const path = require('node:path')
const samplePath = path.join(__dirname, '../sample.txt')
const fullPath = path.join(__dirname, '../full.txt')
const data = fs.readFileSync(fullPath, 'utf-8')

// Solution

function getResult(arg) {
	// Get data - only ranges
	const ranges = arg
		.trim()
		.split('\n')
		.filter((elem) => elem.includes('-'))
		.map((line) => {
			const [start, end] = line.split('-').map(Number)
			return { start, end }
		})
		.sort((a, b) => a.start - b.start)

	let resultCounter = 0
	let originalRange = ranges[0]

	// Main loop
	for (let i = 1; i < ranges.length; i++) {
		let currentRange = ranges[i]

		if (originalRange.end >= currentRange.start) {
			originalRange.end = Math.max(originalRange.end, currentRange.end)
		} else {
			resultCounter += originalRange.end - originalRange.start + 1
			originalRange = currentRange
		}
	}
	resultCounter += originalRange.end - originalRange.start + 1
	return resultCounter
}

// Answer

console.log(getResult(data))
