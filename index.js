#!/usr/bin/env node// "strict use"

//-Declaraciones, Modulos/librerías
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");
// const fetch = require('node-fetch');
const chalk = require('chalk');

//-Declaración de Variables
let log = console.log;
let welcome = "Bienvenidos";


//-Declaración route
let route = process.argv[2];
route = path.resolve(route);
route= path.normalize(route);
// console.log(route); // console muestra la ruta

//-Lectura ruta/directorio
// let readPath = (route)=> {
//   if(!route.includes(".md")) {
//     fs.readdir(route, 'utf-8', function(err, data) {
//       if(err) {
//         console.log("1 leer dir",err);
//       }
//       console.log("1 leer dir",data);
//     });
//   } 
//   else {
//     fs.readFile(route, 'utf-8', function(err, data) {
//         if(err) {
//           console.log("2 leer file",err);
//         }
//         console.log("2 leer file",data);
//     });
//   };
// }

// //Declaración de Promesa: lee directorio y extrae archivos md

// let getMarkDown = () => {
//   return new Promise((resolve,reject)=>{
//     if (!route.includes(".md")) {
//       fs.readdir(route, 'utf-8', function(err, data) {
//         if(err) {
//           reject(err);
//           log(chalk.bold.bgBlue("Error al leer la ruta dir"))
//         }else {
//           let files = data;
//           files = fileHound.create()
//         .paths(route)
//         .ext('md')
//         .find();
//         files
//         .then(res => {
//           res.forEach(element => {
//             log(chalk.bold.underline.bgBlack("Ruta Archivos tipo .md:", element)) //console muestra archivos md
//           })
//         })
//         .catch((err) => {
//           log(chalk.bgYellow(`No es directorio`,(err)))
//         })
//         }
//       })
//     }
//   })
// }
// getMarkDown(route)

// Extraigo archivos md de la Route
// let readRoute = (route)=> {
//   if (!route.includes(".md")) {
//     fs.readdir(route, 'utf-8', function(err, data) {
//       if(err) {
//         console.log("1 leer dir",err);
//       }
//         console.log(data);
//         let files = fileHound.create()
//         .paths(route)
//         .ext('md')
//         .find();
//         files
//         .then(res => {
//           res.forEach(element => {
//             log(chalk.bold.underline.bgBlack("Ruta Archivos tipo .md:", element)) //console muestra archivos md
//           })
//         })
//         .catch((err) => {
//           log(chalk.bgYellow(`No es directorio`,(err)))
//         })
//       }
//     })
//   }
// })


//Declaración de Promesa: lee file y extraer links
let getLinks = (path) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(route, 'utf-8', function(err, data) {   
            if(err) {
                reject(err);
                log(chalk.bold.bgBlue("Error al leer la ruta"))
            }
            else {
                let links=[];
                const renderer = new marked.Renderer();
                renderer.link = function(href, title, text){
                    links.push({
                        href:href, 
                        // text: text,
                        //   file: path,
                        //   title:title
                    })
                }

                marked(data,{renderer:renderer});
                resolve(links);
                let linkString = JSON.stringify(links);
                // console.log(`Listado de Links formato JSON : ${linkString}`);
            }
        })  
    })
}

//Llamado de la Promise
getLinks(route)
.then(res=> {
  log("el resultado es :", res);
})
.catch(err=> {
  log("Err catch :", err);
})

// //0-example export e import con bb
// module.exports = {
//    getLinks:getLinks,
//    saludar: () => {
//     log(chalk.bold.underline.bgBlack(welcome));
//   }

// }  

// let welcome = 'Hola Mundo';

// module.exports = {
//   welcome: welcome,
//   saludar: () => {
//     log(chalk.bold.underline.bgBlack('Bienvenidos'));
//   }
// }
//module.exports = () => {
//  // ...
//};
