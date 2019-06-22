//Declaracion de Modulos de Node
//
const fs = require('fs');

// const nodepath = require('path');
// const fileHound = require('filehound');
//const marked = require("marked");
// const fetch = require('node-fetch');
//
//module.exports = () => {
//  // ...
//};
//0-example export e import
    let date = 210619;
    module.exports = {
    date: date,
    saludar: () => {
        console.log('Hola Mundo');
    }
    
  }

// 
//1-Example funcion me devuelve text del archivo
//
// fs.readFile('prueba.md','utf-8',(error,datos)=> {
// if (error) {
//   throw err;
// }else{
//   console.log(datos);
// }
// });
//
//2-Example leer archivo
// readingFile ((mdFile) => {
//     return new Promise((resolve, reject) =>{
//         fs.readFile(mdFile, "utf-8", (err, data) => {
//             if (err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//     });
//   });
// })

//3-Example vuelve cantidad de lineas de text, pero sincrono"ojo"
//
// let fs = require('fs');
// let numberLines = 
// fs.readFileSync(process.argv[2],'utf8')
// .split('\n')
// .length ;
// console.log(numberLines);

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

//5-Example FileHound, devuelve archivos md
//
// const FileHound = require('FileHound');
// const processArgv = process.argv[2];
// // const arguLine, no olvidar proccess argu
// FileHound.create()
// .paths(processArgv)
// .ext('md')
// .find()
// files.then(files => {
//   files.forEach(file => {
//     console.log('Found file', file)
//   })
//   .catch(err => {
//        console.log(err);
// })
// })

//5-Example FileHound too
//
// const FileHound = require('FileHound');
// const processArgv = process.argv[2];
// const files = FileHound.create()
//   .paths(processArgv).ext('md').find();
 
// files.then(console.log)
//   .catch(err => {
//     console.log(err);
// })

//6-Example creando archivoJson TemplateString

// const processArgv = process.argv[0];
// console.log(processArgv[2]);
// const fs = require ('fs');
// const os = require('os');
// let cpu = os.cpus();
// // let system = os.platform();
// // let user = os.hostname();

// let cpu_string = JSON.stringify(cpu);
// fs.appendFile('prueba.txt',`\n Informacion del cpu: ${cpu_string} `, function(error) {
// if(error) {
//     console.log('Error al crear archivo');
// }
// });

//7-Example Leer archivo
// let path = process.argv[2];
//     console.log(path);
//    fs.readFile(path, 'utf-8',( error, data) => {
//     if(error){
//         console.log(error);
//     }
//     console.log(data);
// });