const fs = require('fs');
let mdPath = process.argv[2];
const marked = require("marked");

// -Example funcion me devuelve links

let links = (path =>{
  fs.readFile(mdPath,"utf8", (err,data) =>{
    if(err){
      throw err
    }
    let links =[];
    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text){
      links.push({       
        href:href,
        text:text,
        file:path,
        title:title 
      })
    }
    marked(data, {renderer:renderer})
    console.log(links)
  })
})
// console.log(links("./prueba.md"));

//
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