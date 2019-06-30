#!/usr/bin/env node 

//1-Declaration Modules/libraries
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");
const fetch = require("fetch");

//2-Declaraton of the Variables
// let log = console.log;

//3-Declaration of the Route
let  argv = process.argv[2];

let route = () => {
     argv.path.resolve();
 // route= path.normalize(route);
 // console.log(route); // console muestra la ruta
}
console.log("route en linea 21" + route);
//4-Declaring Promise mdGetFromDirectory: Read the directory to extract the "md" files
let mdGetFromDirectory = (route) => {
    return new Promise((resolve,reject)=>{
      if (!route.includes(".md")) {
        fs.readdir(route, 'utf-8', function(err, data) {
          if(err) {
            reject(err);
            console.log("Error al leer la ruta dir")
          }else {
            resolve(data);
            let files = data;
            files = fileHound.create()
          .paths(route)
          .ext('md')
          .find();
          files
          .then(res => {
            console.log(res);
            getLinks(res)
            //console muestra array con archivos md
          })
          .catch((err) => {
            console.log(err)
          })
          }
        })
      }
    })
  }
  mdGetFromDirectory(route)

//5-Declaring Promise GetLinks: Read file to extract liks.
let getLinks = (route) => {
  console.log("jaja" +route);
  return new Promise((resolve,reject)=>{
      fs.readFile(route, 'utf-8', function(err, data) {   
          if(err) {
              reject(err);
              console.log("Error al leer la ruta")
          }
          else {
              let links=[];
              const renderer = new marked.Renderer();
              renderer.link = function(href, title, text){
                  links.push({
                    route: route,
                    text: text,
                    href:href 
                    //   title:title
                  })
              }

              marked(data,{renderer:renderer});
              resolve(links);
              // let linkString = JSON.stringify(links);
              console.log(links);
          }
      })  
  })
}


// Promise Call getLinks
getLinks(route)
.then(res=> {
      arrayHref(res);
      // res.forEach(element => { console.log("elemento :" +element.href);
      // });

})
.catch(err=> {
console.log("Err catch :", err);
})

//Funcion Con fetch
let arrayHref = (linksarray) => {

  linksarray.forEach(element => {
    
        return new Promise((resolve,reject)=> {
          fetch.fetchUrl(element.href, (error, meta, body)=> {
            if(meta){
              resolve(meta.status);
            }else{
              reject(error);
            }
          })
        })  
        .then((res) => {

          console.log("el estado", element.href, "es: ", res);
         })
         .catch(err => {
           console.log(err);
         })  
  });
}
//Llamada de la Promesa getStatusLinks



//6-Declaring Promise GetLinks: Read file to extract liks.
// let getStatusLinks = () => {
//   return new Promise((resolve,reject)=>{
//       fs.readFile(route, 'utf-8', function(err, data) {   
//           if(err) {
//               reject(err);
//               console.log("Error al leer la ruta")
//           }
//           else {
//               let links=[];
//               const renderer = new marked.Renderer();
//               renderer.link = function(href, title, text){
//                   links.push({
//                       href:href, 
//                       // text: text,
//                       //   file: path,
//                       //   title:title
//                   })
//               }

//               marked(data,{renderer:renderer});
//               resolve(links);
//               // let linkString = JSON.stringify(links);
//               // console.log(`Listado de Links formato JSON : ${linkString}`);
//           }
//       })  
//   })
// }

//6-Declaring Promise GetLinks: Read file to extract liks.
//let stats = false;
//let validate = false;
// let url= "https://www.google.com";

// let getStatusLinks = (url) => {
//   return new Promise((resolve,reject)=> {
//     fetch.fetchUrl(url, (error, meta, body)=> {
//       if(meta){
//         resolve(meta.status);
//       }else{
//         reject(error);
//       }
//     })
//   })
// }
// console.log(getStatusLinks(url));

//Llamada de la Promesa getStatusLinks
// getStatusLinks(url)
// .then(res => {
//  console.log("el estado", url, "es: ", res);
// })
// .catch(err => {
//   console.log(err);
// })

//let statusUrl = (getLinks)=> {
 // console.log(res);
  // getLinks.filter(element => {
  //   console.log( element.href);
  
  // getLinks.filter(element => {
  //   // if(validate === false && stats === false){
  //( href.element);
  //   // }else if(validate === true){
  //   // fetch.fetchUrl(element.href)
  //   // .then(res=> {
  //   //   console.log(element.href, res.status);
  //   // })
  //   // .catch(err =>{
  //   //   console.error("error ", err)
  //   // })
  // })
//}
  //console.log(statusUrl(getLinks));

//module.exports = () => {
//  // ...
//};

//0-example export e import con bb

// let welcome = 'Hola Mundo';
// module.exports = {
//   welcome: welcome,
//   saludar: () => {
//     log(chalk.bold.underline.bgBlack('Bienvenidos'));
//   }
  
// }