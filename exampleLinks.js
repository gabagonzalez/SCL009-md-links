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