function getResult(arg) {
	const data = arg.split('\n').map((elem) => {
		return { direction: elem[0], steps: +elem.slice(1) }
	})
	let currentPosition = 50
	let counter = 0

	function getPosition(index) {
		return ((index % 100) + 100) % 100
	}

	for (let i = 0; i < data.length; i++) {
		data[i].direction == 'L'
			? (currentPosition = getPosition(currentPosition - data[i].steps))
			: (currentPosition = getPosition(currentPosition + data[i].steps))
		currentPosition == 0 ? counter++ : null
	}
	// Get result
	console.log(counter)
}

const fs = require('node:fs')
const { clearLine } = require('node:readline')

const samplePath = 'sample.txt'
const fullPath = 'full.txt'

fs.readFile(fullPath, 'utf-8', (error, data) => {
	if (error) {
		console.log(`output->error`, error)
	}
	getResult(data)
})
