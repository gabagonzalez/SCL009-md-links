const fs = require('fs');
let mdPath = process.argv[2];
const marked = require("marked");

//1-Example funcion me devuelve text del archivo
// fs.readFile(mdPath,'utf-8',(error,datos)=> {
//   if (error) {
//     console.log(error);
//   }else{
//     console.log(datos);
//   }
//   });

// 4-Example funcion me devuelve links

const links = (path =>{
  fs.readFile(path,"utf8", (err,data) =>{
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
        // title:title 
      })
    }
    marked(data, {renderer:renderer})
    //   console.log(links)
  })
})
console.log(links("./prueba.md"));