const fs = require('fs');
let mdPath = process.argv[2];

//1-Example funcion me devuelve text del archivo
fs.readFile(mdPath,'utf-8',(error,datos)=> {
  if (error) {
    console.log(error);
  }else{
    console.log(datos);
  }
  });