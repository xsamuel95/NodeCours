const path = require('path');
const fs = require ('js');

const cheminAbsoluIndexHtml = path.join(__dirname ,'..assets/index.html') ;
const cheminAbsoluLogTxt = path.join(__dirname, 'log.txt') ;

console.log(cheminAbsoluIndexHtml);
console.log(cheminAbsoluLogTxt);

process.exit(1);


const contenuIndexhtml = fs.readFileSync('../assets/index.html');
const contenuLogtxt = String(fs.readFileSync('log.txt'));

console.log(contenuIndexhtml);
console.log(contenuLogtxt);
