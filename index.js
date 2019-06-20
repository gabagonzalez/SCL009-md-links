
<<<<<<< HEAD
//module.exports = () => {
//  // ...
//};

//example
//const fileUrl = URL('file:///tmp/hello');
//const fileUrl = new URL('file:///tmp/hello');
//fs.readFileSync(fileUrl);

//example me devuelve text del archivo
// const fs= require('fs');
// fs.readFile('archivo.text','utf-8',(error,datos)=> {
// if (error) {
//   result;
// }else{
//   console.log(datos);
// }
// });

//example vuelve lineas de text
// let fs = require('fs');
// let numberLines = 
// fs.readFileSync(process.argv[2],'utf8')
// .split('\n')
// .length -1;

// console.log(numberLines);

readingFile ((mdFile) => {
    return new Promise((resolve, reject) =>{
        fs.readFile(mdFile, "utf-8", (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
    });

  });
 
})
=======
//primero declaración 

const marked = require("marked");

const fs = require('fs');



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
        // text:text,
        // file:path,
        // title:title
      
      })

    }
    marked(data, {renderer:renderer})
      console.log(links)
  })

})

console.log(links("./prueba.md"));
>>>>>>> fbb316544b57d430fdce68bbecb91bdfc9aa9c1f
