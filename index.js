
//primero declaración 

const marked = require("marked");
const fs = require('fs');

//example funcion me devuelve text del archivo

fs.readFile('prueba.md','utf-8',(error,datos)=> {
if (error) {
  throw err;
}else{
  console.log(datos);
}
});

//example funcion me devuelve links

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
      console.log(links)
  })

})

console.log(links("./prueba.md"));


//example vuelve cantiada de lineas de text, pero sincrono"ojo"
// let fs = require('fs');
// let numberLines = 
// fs.readFileSync(process.argv[2],'utf8')
// .split('\n')
// .length ;
// console.log(numberLines);