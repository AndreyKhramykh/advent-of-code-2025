const fs = require('node:fs')
const path = require('node:path')
const samplePath = path.join(__dirname, 'sample.txt')
const fullPath = path.join(__dirname, 'full.txt')
const data = fs.readFileSync(fullPath, 'utf-8')

// Solution

function getResult(arg) {
	let grid = arg.split('\n')
	const rows = grid.length
	const columns = grid[0].length
	let resultCounter = 0
	let iterationCounter = 0
	// Get rolls quantity function

	function getRolls(grid, indexRow, indexColumn) {
		let rollsCounter = 0
		for (let r = -1; r <= 1; r++) {
			for (let c = -1; c <= 1; c++) {
				if (r === 0 && c === 0) continue
				const currentPosition = grid[indexRow + r]?.[indexColumn + c]
				if (currentPosition === '@' || currentPosition == 'x') rollsCounter++
			}
		}
		return rollsCounter
	}

	// Replace symbol function

	function replaceAt(string, index, symbol) {
		return string.slice(0, index) + symbol + string.slice(index + 1)
	}
	
	// Main loop
	do {
		iterationCounter = 0
		grid = grid.map(row => row.replaceAll('x', '.'))
		for (r = 0; r < rows; r++) {
			for (c = 0; c < columns; c++) {
			if (grid[r][c] !== '@') continue
			if (getRolls(grid, r, c) < 4) {
				iterationCounter++
				grid[r] = replaceAt(grid[r], c, 'x')
			}
			}
		}
		resultCounter += iterationCounter
	} while (iterationCounter != 0)
	

	// Result 
	
	return resultCounter
}

// Answer

console.log(getResult(data))