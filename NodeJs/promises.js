const {readFile} = require('fs/promises')

async function read() {
  try {
    const result = await readFile("./data/third.txt",'utf-8');
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
read();
