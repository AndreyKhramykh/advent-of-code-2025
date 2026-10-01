const fs = require('node:fs')
const path = require('node:path')
const samplePath = path.join(__dirname, 'sample.txt')
const fullPath = path.join(__dirname, 'full.txt')
const data = fs.readFileSync(fullPath, 'utf-8')

// Solution

function getResult(arg) {
}

// Answer

console.log(getResult(data))