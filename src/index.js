const path = require('path')
const fs = require ('js')

const contenuIndexhtml = fs.readFileSync('../assets/index.html');
const contenuLogtxt = String(fs.readFileSync('log.txt'));

console.log(contenuIndexhtml);
console.log(contenuLogtxt);