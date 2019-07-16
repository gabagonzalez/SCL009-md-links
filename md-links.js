// #!/usr/bin/env node 

//A-Declaration Modules/libraries
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");
const fetch = require("fetch");
const colors = require('colors');

//B-Declaraton of the Variables
let mdLinks = {};

//C-Function from relative a absolute with Module Path: **Resolver *** 
mdLinks.pathConvertAbsolute = (route) => {
  if(!path.isAbsolute(route)) {
    let pathConvertAbsolute = path.resolve(route);
    return pathConvertAbsolute;
  }
  
}
//D-MODULE IMPORT TO INDEX.JS:
mdLinks.mdLinks = (route,options) => {
  let pathExecute =  mdLinks.pathConvertAbsolute(route);
  Promise.resolve(mdLinks.callFileOrDirectory(pathExecute));
}

//E-DECLARING PROMISES
//1a-PromiseFileOrDirectory with Module FileSystem-Stat: return info. of a file.
mdLinks.promiseFileOrDirectory = (route) => {
 return new Promise ((resolve, reject) => {
     fs.stat(route, (err, salida) => {
         if(err) {
          reject(err);
          return err;

         } else {
          resolve(salida);
          let data = salida;
          return data;   
         }
     })
  })
}

//1b-Call PromiseFileOrDirectory: run the route to the next action.
mdLinks.callFileOrDirectory = (route) => {
  mdLinks.promiseFileOrDirectory(route)
  .then( salida =>   {
    let data = salida;
    if (data.isFile()) {
      let result = data.isFile;
      mdLinks.callFromFile(route)
    }
    else if (data.isDirectory()) {
      let result = data.isDirectory;
      mdLinks.getFromDirectory(route)
    }
    return result;  
  })
  .catch( err => { 
    return err;
  })
}


//2-Promise getFromDirectory with FileHound-Module: Read the directory to extract the "md" files.
mdLinks.getFromDirectory = (route) => {
  return new Promise((resolve,reject)=>{
    fs.readdir(route, 'utf-8', function(err, files) {
      if(err) {
        reject( err);
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
          return err;
        })
      }
    })
  })
}

//3-Promise getLinks with Marked-Module: Read file to extract links.
mdLinks.getFromFile = (route) => {
  return new Promise((resolve,reject)=>{
    fs.readFile(route, 'utf-8', function(err, data) {   
      if(err) {
        reject(err);
      }
      else {
        let links=[];
        const renderer = new marked.Renderer();
        renderer.link = function(href, title, text){
          links.push({
            route: route,
            text: text,
            href: href
          })
        }
        marked(data,{renderer:renderer});
        resolve(links);
      }
    })
  })
}

//4-Promise validateLinks with Fetch-Module: next CallGetLinks.
mdLinks.validateLinks = (array)=> {
  array.forEach(element => {
    return new Promise((resolve,reject)=> {
      fetch.fetchUrl(element.href,(error, meta, body)=> {
        if(meta) {
          resolve(meta.status);
        }
        else {
          reject(error);
        }
      })
    })
  })
  
}


module.exports = mdLinks;