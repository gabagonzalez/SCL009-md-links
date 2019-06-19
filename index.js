
//module.exports = () => {
//  // ...
//};

//example
//const fileUrl = URL('file:///tmp/hello');
//const fileUrl = new URL('file:///tmp/hello');
//fs.readFileSync(fileUrl);

//example me devuelve text del archivo
// const fs= require('fs');
// fs.readFile('archivo.text','utf-8',(error,datos)=> {
// if (error) {
//   result;
// }else{
//   console.log(datos);
// }
// });

//example vuelve lineas de text
let fs = require('fs');
let numberLines = 
fs.readFileSync(process.argv[2],'utf8')
.split('\n')
.length -1;

console.log(numberLines);