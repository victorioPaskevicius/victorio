const fs = require('fs')

// Leer archivos
let first = fs.readFileSync('./data/first.txt','utf-8')
let sec = fs.readFileSync('./data/second.txt')
console.log(first)
console.log(sec.toString())

// Escribir archivos
title = 'lorem ipsum'
let write = fs.writeFileSync('./data/third.txt', 'Este es un tercer archivo')
let reWrite = fs.writeFileSync('./data/third.txt', title, {
    flag: 'a'
})