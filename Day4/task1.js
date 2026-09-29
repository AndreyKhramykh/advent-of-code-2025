const fs = require('node:fs')
const path = require('node:path')
const samplePath = path.join(__dirname, 'sample.txt')
const fullPath = path.join(__dirname, 'full.txt')
const data = fs.readFileSync(fullPath, 'utf-8')

// Solution

function getResult(arg) {
	const grid = arg.split('\n')
	const rows = grid.length
	const columns = grid[0].length
	let resultCounter = 0

	// Get rolls quantity function

	function getRolls(grid, indexRow, indexColumn) {
		let rollsCounter = 0
		for (let r = -1; r <= 1; r++) {
			for (let c = -1; c <= 1; c++) {
				if (r === 0 && c === 0) continue
				const currentPosition = grid[indexRow + r]?.[indexColumn + c]
				if (currentPosition === '@') rollsCounter++
			}
		}
		return rollsCounter
	}

	// Main loop
	
		for (r = 0; r < rows; r++) {
		for (c = 0; c < columns; c++) {
			if (grid[r][c] !== '@') continue
			if (getRolls(grid, r, c) < 4) resultCounter++
		}
	}

	// Result 

	return resultCounter
}

// Answer

console.log(getResult(data))