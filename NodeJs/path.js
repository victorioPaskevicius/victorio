const path = require('path')

 

const filepath = console.log(path.join('/public', 'dist', '/styles', 'main.css'))
console.log(filepath)
console.log(path.basename(filepath))
console.log(path.dirname(filepath))
console.log(path.parse(filepath))
// console.log(path.resolve('dist'))