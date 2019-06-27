//Declaraciones, Modulos, librerias
const fs = require('fs');
const path = require('path');
// const fileHound = require('filehound');
const marked = require("marked");

//-Declaro mi route
let route = process.argv[2];
route = path.resolve(route);
route= path.normalize(route);

// console.log(route); // console muestra la ruta

//Si no es archivo .md se arroje error, sino que lea funcion callback que sino da error extraiga links
// funcion me devuelve links usando promesa

// module.exports = {
 let mdLinks = (path) => {
  return new Promise((resolve,reject)=>{
      try{
        
          if(route.includes("./")) {
              throw (new Error("no es arhivo md"));
              
          }
          fs.readFile(route, 'utf-8', function(err, data) {
            
              if(err){
                  reject(err.code);
                  console.log("error al leer")
              }
              else{
                  let links=[];
                  const renderer = new marked.Renderer();
                  renderer.link = function(href, title, text){
                      links.push({
                          href:href, 
                        //   text: text,
                        //   file: path,
                        //   title:title
                      })
                  }
                  marked(data,{renderer:renderer});
                  resolve(links);
                  let linkString = JSON.stringify(links);
                  console.log(`Listado de Links formato JSON : ${linkString}`);
              }
          })  
      }
      catch(error){
          reject(error);
          console.log("error catch")
      }        
  })
  
 }
 
// }
console.log(mdLinks(route))


   