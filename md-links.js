// #!/usr/bin/env node 

//1***Declaration Modules/libraries
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");
const fetch = require("fetch");

//2***Declaraton of the Variables
let mdLinks = {};// *** 0 ***

//3 ***Funcion para convertir la ruta a Absoluta **Normalizar y resolver *** 
 mdLinks.pathConvertAbsolute = (route) => {
  // primero
 let pathResolve = path.resolve(route);
  // segundo 
 let pathConvertAbsolute = path.normalize(pathResolve);
  // ** 
  // console.log( "pathConvertAbsolute es :" + pathConvertAbsolute);
return pathConvertAbsolute;
}
 
//A-MODULO IMPORTADO EN INDEX.JS  
mdLinks.mdLinks = (route,options) => {
  if(options === '--validate'){ 
    let options = {};
    return options.validate = true;
  }
 
  let pathExecute =  mdLinks.pathConvertAbsolute(route);
    // console.log("option ingresada es :" + optionInConsole);

  // secuencia Declaration of the Route
  
 
//  console.log("Ruta Absoluta----" + pathExecute);

mdLinks.callFileOrDirectory(pathExecute);

}

// FUNCIONES PARA CONECTAR 
//1- funcion para clasificar en  ** archivo **  o ** directorio ** //1erPROMESA metodo fs.stat
mdLinks.promiseFileOrDirectory = (route) => {
    //console.log("dentro de pathFileOrDirectory :" + route);
   return new Promise ((resolve, reject) => {
       fs.stat(route, (err, salida) => {
           if(err) {
               reject(err);
           } else {
                resolve(salida);
           }
       })
    })
}

//2-funcion Call PromiseFileOrDirectory
mdLinks.callFileOrDirectory = (route) => {
    mdLinks.promiseFileOrDirectory(route)
    .then( salida =>   {
      let fileOrDirectory = mdLinks.isFileOrDirectory(salida);
      if(fileOrDirectory==='directory'){
        mdLinks.getFromDirectory(route)
        // console.log("siii es directory");
   
      }else if (fileOrDirectory==='file') {
        mdLinks.callGetLinks(route)
        // console.log("sii es file");
        }
      
    })
    .catch( err => { console.log(err); } )
}

// 3-funcion uso de funciones " isFile() "  y " isDirectory() "
mdLinks.isFileOrDirectory = (element) => {
    // entrega booleano true
    if( element.isFile()){
      //  console.log(" tu archivo es un **** archivo *** ");
      return 'file';
    } else if (element.isDirectory()){
        // console.log(" tu archivo es un *** Directorio *** ")
      return 'directory';
    }
}

//4-Declaring Promise mdGetFromDirectory: Read the directory to extract the "md" files
mdLinks.getFromDirectory = (route) => {
  return new Promise((resolve,reject)=>{
    fs.readdir(route, 'utf-8', function(err, files) {
      if(err) {
        reject(err);
      }else {
        resolve(files);
        files = fileHound.create()
        .paths(route)
        .ext('md')
        .find();
        files
        .then(res => {
          Promise.all(res)
          .then (res => {
              res.map(e=>{
              return mdLinks.callGetLinks(e);
            })
          })
        })
        .catch((err) => {
          console.log(err)
        })
      }
    })
  })
}


// 5-Declaring Promise GetLinks: Read file to extract liks.
mdLinks.getLinks = (route) => {
  // console.log("en getLinks es  : " + route);
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
                  href: href 
                  //   title:title
                })
            }
            marked(data,{renderer:renderer});
            resolve(links);
            // let linkString = JSON.stringify(links);
            // console.log("links :" + linkString);
        }
    })  
})
}

// Promise Call getLinks
mdLinks.callGetLinks= (route)=> {
    mdLinks.getLinks(route)
    .then(res=> {
      // let linkString = JSON.stringify(res);
      // console.log(linkString);
      mdLinks.arrayHref(res);
     })
  .catch(err=> {
    console.log("Err catch :", err);
  })
}

// // Funcion Con fetch
mdLinks.arrayHref = (array) => {

array.forEach(element => {
  return new Promise((resolve,reject)=> {
    fetch.fetchUrl(element.href,(error, meta, body)=> {
        if(meta) {
          resolve(meta.status);
        }else {
          reject(error);
        }
    })
})  
    .then((res) => {
      // console.log("aqui  " +JSON.stringify(element.route));
    console.log( element.route+ "   "+element.href +"   "+ element.text +res);
    })
    .catch(err => {
    console.log(err);
    })  
});
}
module.exports= mdLinks;
// console.log("mdlinks es" + mdLinks);
