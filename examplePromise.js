//Declaraciones, Modulos, librerias
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");

//-Declaro mi route
let route = process.argv[2];
route = path.resolve(route);
route= path.normalize(route);
console.log(route); // console muestra la ruta

//Si no es archivo .md se arroje error, sino que lea funcion callback que sino da error extraiga links

module.exports = {
 mdLinks: (path) => {
  return new Promise((resolve,reject)=>{
      try{
        
          if(route.includes(".md")) {
              throw (new Error("no es arhivo md"));
          }
          fs.readFile(route, 'utf-8', function(err, data) {
            
              if(err){
                  reject(err.code);
              }
              else{
                  let links=[];
                  const renderer = new marked.Renderer();
                  renderer.link = function(href, title, text){
                      links.push({
                          href:href, 
                          text: text,
                          file: path,
                          title:title
                      })
                  }
                  marked(data,{renderer:renderer});
                  resolve(links);
              }
          })  
      }
      catch(error){
          reject(error);
      }        
  })
  
 }
 
}
console.log(links("./prueba.md"))