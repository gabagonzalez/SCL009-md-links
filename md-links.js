// #!/usr/bin/env node 

//A-Declaration Modules/libraries
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");
const fetch = require("fetch");
const chalk = require('chalk');

//B-Declaraton of the Variables
let mdLinks = {};// *** 0 ***

//C-MODULE IMPORT TO INDEX.JS:
mdLinks.mdLinks = (route,options) => {
  if(options === '--validate'){ 
    let options = {};
    return options.validate = true;
  }
 
  let pathExecute =  mdLinks.pathConvertAbsolute(route);
  mdLinks.callFileOrDirectory(pathExecute);

}

//***FUNCTION FOR CONECT***
//1-Function from relative a absolute with Module Path: **Normalizar y resolver *** 
mdLinks.pathConvertAbsolute = (route) => {
  let pathResolve = path.resolve(route); //first
  let pathConvertAbsolute = path.normalize(pathResolve);//second
   return pathConvertAbsolute;
 }

// 2-Function Conditional " isFile() " or " isDirectory() " : se incluye in CallFileOrDirectory.
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

//***DECLARING PROMISES
//1a-Declaring Promise PromiseFileOrDirectory with Module FileSystem-Stat: return info. of a file.
mdLinks.promiseFileOrDirectory = (route) => {

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

//1b-Call PromiseFileOrDirectory: run the route to the next action.
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

//2-Declaring Promise getFromDirectory with FileHound/Promise All: Read the directory to extract the "md" files
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

// 3a-Declaring Promise GetLinks with Module Marked: Read file to extract liks.
mdLinks.getLinks = (route) => {
 
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

          }
    })  
})
}

//3b-Call Promise getLinks.
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

//4-Declaring Promise ArrayHref with Module Fetch: se incluye in CallGetLinks.
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
     console.log( chalk.green(element.route)+ " "+chalk.cyan(element.href) +"  "+ chalk.blue.bgBlack(element.text));
    })
    .catch(err => {
    console.log(err);
    })  
});
}


module.exports= mdLinks;

