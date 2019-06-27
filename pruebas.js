#!/usr/bin/

// import { resolve } from "url";
// import { rejects } from "assert";

//Example export e import con bb

// let welcome = 'Hola Mundo';

// module.exports = {
//   welcome: welcome,
//   saludar: () => {
//     log(chalk.bold.underline.bgBlack('Bienvenidos'));
//   }
// }

// example
// funcion me devuelve links usando promesa
// module.exports = {
//  let mdLinks = (path) => {
//   return new Promise((resolve,reject)=>{
//       try{
        
//           if(route.includes("./")) {
//               throw (new Error("no es arhivo md"));
              
//           }
//           fs.readFile(route, 'utf-8', function(err, data) {
            
//               if(err){
//                   reject(err.code);
//                   console.log("error al leer")
//               }
//               else{
//                   let links=[];
//                   const renderer = new marked.Renderer();
//                   renderer.link = function(href, title, text){
//                       links.push({
//                           href:href, 
//                         //   text: text,
//                         //   file: path,
//                         //   title:title
//                       })
//                   }
//                   marked(data,{renderer:renderer});
//                   resolve(links);
//                   let linkString = JSON.stringify(links);
//                   console.log(`Listado de Links formato JSON : ${linkString}`);
//               }
//           })  
//       }
//       catch(error){
//           reject(error);
//           console.log("error catch")
//       }        
//   })
  
//  }
 
// // }
// console.log(mdLinks(route))

//taller promise
  //taller example declaro promise
//   let getData = () => {
//     return new Promise((resolve,reject)=>{
//         fs.readFile(route, 'utf-8', function(err, data) {
//             if(err) {
//                 reject(err);
//                 console.log("error al leer")
//             }
//             else {
//                 let links=[];
//                 const renderer = new marked.Renderer();
//                 renderer.link = function(href, title, text){
//                     links.push({
//                         href:href, 
//                         // text: text,
//                         //   file: path,
//                         //   title:title
//                     })
//                 }
                
//                 marked(data,{renderer:renderer});
//                 resolve(links);
//                 let linkString = JSON.stringify(links);
//                 console.log(`Listado de Links formato JSON : ${linkString}`);
//             }
//         });
//     });
// }

// getData(route)
// .then(res=> {
//   console.log("el resultado es", res);
// })
// .catch(err=> {
//   console.log("err catch",err);
// })

// Utilizando async functions:

// const util = require('util');
// const fs = require('fs');

// const stat = util.promisify(fs.stat);

// async function callStat() {
//   const stats = await stat('.');
//   console.log(`This directory is owned by ${stats.uid}`);
// }
// // let stats = false;
// // let validate = false;
// let fetch = (links)=>{
//     links.forEach(element => {
//     // if(validate === false && stats === false){
//     console.log(element.file, element.href);
//     // }else if(validate === true){
//     fetch(element.href)
//     .then(res=>{
//     console.log(element.file, element.href, res.status);
    
//     })
//     .catch(err =>{
//     console.error("error ", err)
//     })
//     // }
//     })
//    }
//    console.log(fetch(mdLinks))