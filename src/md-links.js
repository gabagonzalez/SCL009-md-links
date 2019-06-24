 
//const mdLinks = require('./index.js');

  //mdLinks.saludar();
  //console.log(mdLinks.date);

//A-Declaraciones, Modulos, librerias
//
const chalk = require('chalk');
const log = console.log;
const fs = require('fs');
const path = require('path');
// const fileHound = require('filehound');
// const marked = require("marked");
// const fetch = require('node-fetch');

//module.exports = () => {
//  // ...
//};

//0-example export e import con bb
let welcome = 'Hola Mundo';

module.exports = {
  welcome: welcome,
  saludar: () => {
    log(chalk.bold.underline.bgBlack('Bienvenidos'));
  }
}
//
//1-leer ruta/directorio
let mdPath = process.argv[2];
if(mdPath.includes(".md")) {
  fs.readFile(mdPath, 'utf-8', function(err, data) {
    if(err) {
      console.log(err);
    }
    console.log(data);
  });
} 
else {
  fs.readdir(mdPath, 'utf-8', function(err, data) {
    if(err) {
      console.log(err);
    }
    console.log(data);
    
  });
};




//2-Example funcion archivos ext md
// const processArgv = process.argv[2];
// fileHound.create()
// .paths(processArgv)
// .ext('md')
// .find()
// files.then(files => {
//   files.forEach(file => {
//     console.log('Found file', file)
//   })
//   .catch(err => {
//     console.log(err);
//   })
// })



//4-Example funcion me devuelve links
//
// const links = (path =>{
//   fs.readFile(path,"utf8", (err,data) =>{
//     if(err){
//       throw err
//     }
//     let links =[];
//     const renderer = new marked.Renderer();
//     renderer.link = function(href, title, text){
//       links.push({       
//         href:href,
//         text:text,
//         file:path,
//         // title:title 
//       })
//     }
//     marked(data, {renderer:renderer})
//       console.log(links)
//   })
// })
// console.log(links("./prueba.md"));



