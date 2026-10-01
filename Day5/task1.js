const fs = require('node:fs')
const path = require('node:path')
const samplePath = path.join(__dirname, '../sample.txt')
const fullPath = path.join(__dirname, '../full.txt')
const data = fs.readFileSync(fullPath, 'utf-8')

// Solution

function getResult(arg) {
	// Get data - ranges and id of ingredients
	const ranges = arg
		.trim()
		.split('\n')
		.filter((elem) => elem.includes('-'))
		.map((line) => {
			const [start, end] = line.split('-').map(Number)
			return { start, end }
		})

	const ingredientsID = arg
		.trim()
		.split('\n')
		.filter((elem) => !elem.includes('-'))
		.map(Number)

	let resultCounter = 0

	// Main loop

	for (let i = 0; i < ingredientsID.length; i++) {
		if (
			ranges.some((range) => {
				return ingredientsID[i] >= range.start && ingredientsID[i] <= range.end
			})
		) {
			resultCounter++
		}
	}

	return resultCounter
}

// Answer

console.log(getResult(data))
