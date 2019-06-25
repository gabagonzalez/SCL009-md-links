//A-Declaraciones, Modulos, librerias
const fs = require('fs');
const marked = require("marked");

//Si no es archivo .md se arroje error, sino que lea funcion callback que sino da error extraiga links
let mdPath = process.argv[2];
module.exports = {
 links: (path)=>{
  return new Promise((resolve,reject)=>{
      try{
        
          if(mdPath.includes(".md")) {
              throw (new Error("no es arhivo md"));
          }
          fs.readFile(mdPath, 'utf-8', function(err, data) {
            
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
console.log(links("./prueba.md"));
//otros
//-Example creando archivoJson TemplateString

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