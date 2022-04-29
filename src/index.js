const path = require('path');
const fs = require ('js');

const cheminAbsoluIndexHtml = ;
const cheminAbsoluLogTxt = ;

console.log(cheminAbsoluIndexHtml);
console.log(cheminAbsoluLogTxt);

process.exit(1);


const contenuIndexhtml = fs.readFileSync('../assets/index.html');
const contenuLogtxt = String(fs.readFileSync('log.txt'));

console.log(contenuIndexhtml);
console.log(contenuLogtxt);
