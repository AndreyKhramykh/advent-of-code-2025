function getResult(arg) {
	const data = arg.split('\n').map((elem) => {
		return { direction: elem[0], steps: +elem.slice(1) }
	})
	let currentPosition = 50
	let counter = 0

	function getPosition(index) {
		return ((index % 100) + 100) % 100
	}
	function countTransitions(
		index,
		direction,
		currentPosition,
		potentialPosition
	) {
		if (direction === 'R') {
			return Math.floor(index / 100)
		}

		const coef =
			(currentPosition === 0 ? -1 : 0) + (potentialPosition === 0 ? 1 : 0)

		return Math.abs(Math.floor(index / 100)) + coef
	}

	for (let i = 0; i < data.length; i++) {
		let index = 0
		data[i].direction == 'L'
			? (index = currentPosition - data[i].steps)
			: (index = currentPosition + data[i].steps)

		let potentialPosition = getPosition(index)
		let params = [index, data[i].direction, currentPosition, potentialPosition]
		counter += countTransitions(...params)
		currentPosition = potentialPosition
	}
	// Get result
	console.log('result', counter)
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
