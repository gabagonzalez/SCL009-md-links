
//module.exports = () => {
//  // ...
//};


//example me devuelve text del archivo
const fs= require('fs');
fs.readFile('archivo.text','utf-8',(error,datos)=> {
if (error) {
  result;
}else{
  console.log(datos);
}
});

//example vuelve cantiada de lineas de text, pero sincrono"ojo"
// let fs = require('fs');
// let numberLines = 
// fs.readFileSync(process.argv[2],'utf8')
// .split('\n')
// .length ;

// console.log(numberLines);

