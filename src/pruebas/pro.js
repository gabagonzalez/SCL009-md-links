//Declaraciones, Modulos, librerias
const fs = require('fs');
const path = require('path');
// const fileHound = require('filehound');
const marked = require("marked");

//-Declaro route
let route = process.argv[2];
route = path.resolve(route);
route= path.normalize(route);

// console.log(route); // console muestra la ruta

//Declaro Promesa
let getLinks = (path) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(route, 'utf-8', function(err, data) {
              
            if(err) {
                reject(err);
                console.log("error al leer")
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
  // console.log(getLinks(route))

//Llamado de la Promise
  getLinks(route)
  .then(res=> {
    console.log("el resultado array es", res);
  })
  .catch(err=> {
    console.log("err catch", err);
  })

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

// }