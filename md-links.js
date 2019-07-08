// #!/usr/bin/env node 

//A-Declaration Modules/libraries
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");
const fetch = require("fetch");
const chalk = require('chalk');

//B-Declaraton of the Variables
let mdLinks = {};

//C-FUNCTIONS TO CONNECT
// 1-Function from relative a absolute with Module Path: **Resolver *** 
mdLinks.pathConvertAbsolute = (route) => {
  if(!path.isAbsolute(route)) {
    // let routeChange = path.normalize(route)
    let pathConvertAbsolute = path.resolve(route);
    return pathConvertAbsolute;
  }
}
 // 2-Conditional Function " isFile() " or " isDirectory() " : se incluye in CallFileOrDirectory.
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

//D-MODULE IMPORT TO INDEX.JS:
mdLinks.mdLinks = (route,options) => {
  let pathExecute =  mdLinks.pathConvertAbsolute(route);
  Promise.resolve(mdLinks.callFileOrDirectory(pathExecute));
  // Promise.resolve(mdLinks.statusLinks(pathExecute,options));
}

//E-DECLARING PROMISES
//1a-Declaring Promise PromiseFileOrDirectory with Module FileSystem-Stat: return info. of a file.
mdLinks.promiseFileOrDirectory = (route) => {

 return new Promise ((resolve, reject) => {
     fs.stat(route, (err, salida) => {
         if(err) {
             reject(err);
             console.log(chalk.red("oops, no hay archivos que ver : "+ err));
         } else {
              resolve(salida);
         }
     })
  })
}

//b-Call PromiseFileOrDirectory: run the route to the next action.
mdLinks.callFileOrDirectory = (route) => {
  mdLinks.promiseFileOrDirectory(route)
  .then( salida =>   {
    let fileOrDirectory = mdLinks.isFileOrDirectory(salida);
    if(fileOrDirectory==='directory'){
      mdLinks.getFromDirectory(route)
      // console.log("siii es directory");
 
    }else if (fileOrDirectory==='file') {
      mdLinks.callFromFile(route)
      // console.log("sii es file");
      }
    
  })
  .catch( err => { console.log(chalk.red("no se encuentra tu path, favor inténtalo nuevamente :  "+ err)); } )
}

//2-Declaring Promise getFromDirectory with FileHound/Promise All: Read the directory to extract the "md" files and extract links with callGetLinks.
mdLinks.getFromDirectory = (route) => {
  return new Promise((resolve,reject)=>{
    fs.readdir(route, 'utf-8', function(err, files) {
      if(err) {
        reject( err);
        console.log(chalk.red("oops, no hay archivos que leer"+ err));
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
              return mdLinks.callFromFile(e);
            })
          })
        })
        .catch((err) => {
          console.log(chalk.red("oops, no hay archivos extension md"+ err));
        })
      }
    })
  })
}

//3a-Declaring Promise GetLinks with Module Marked: Read file to extract liks.
mdLinks.getFromFile = (route) => {
  return new Promise((resolve,reject)=>{
    fs.readFile(route, 'utf-8', function(err, data) {   
      if(err) {
        reject(err);
        console.log(chalk.red("oops, no hay archivos que leer"+ err));
      }
      else {
        let links=[];
        const renderer = new marked.Renderer();
        renderer.link = function(href, title, text){
          links.push({
            route: route,
            text: text,
            href: href,
            //title:title
          })
        }
        marked(data,{renderer:renderer});
        resolve(links);
        console.log(links);  
          
      }
    })
  })
}

//4-Declaring PromiseAll statusLinks with Module Fetch: se incluye in CallGetLinks.
mdLinks.validateLinks = (array)=> {
  array.forEach(element => {
    return new Promise((resolve,reject)=> {
      fetch.fetchUrl(element.href,(error, meta, body)=> {
        if(meta) {
          resolve(meta.status);
          // console.log(meta.status);
        }
        else {
          reject(error);
          console.log(chalk.red("OOPPs, error al ver status link"+ err));
        }
      })
    })
  })


// mdLinks.callStatusLinks= (route) => {
  // mdLinks.statusLinks(route)
  // .then((res) => {
  //   //  console.log(res);
  //   //  console.log( chalk.green(element.route)+ " "+ chalk.cyan(element.href) +"  "+ chalk.blue.bgBlack(element.text));
  //   if (res == 200) {
  //     element.status = res;
  //     element.response = "Ok 200";
  //     console.log( chalk.green(element.route)+ " "+chalk.cyan(element.href) +"  "+chalk.yellow.bgBlack(element.response)+"  "+ chalk.blue.bgBlack(element.text));
  //     resolve(element);
  //   }
  //   else {
  //     element.status = res;
  //     element.response = "Fail 404";
  //     console.log( chalk.green(element.route)+ " "+chalk.cyan(element.href) +"  "+chalk.yellow.bgBlack(element.response)+"  "+ chalk.blue.bgBlack(element.text));
  //     // console.log("error status")
  //     element.status = res;
  //     element.response = res.text;
  //     resolve(element);   
  //   }
  // })
  // .catch(err => {
  //   // console.log(err);
  //   if(err) {
  //     element.status = null;
  //     element.response = "fail"
  //     resolve(element);
  //     console.log( chalk.green(element.route)+ " "+chalk.cyan(element.href) +"  "+chalk.yellow.bgBlack(element.response)+"  "+ chalk.blue.bgBlack(element.text));
  //   }
  // })
}


module.exports = mdLinks;