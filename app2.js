//A-Declaraciones, Modulos, librerias
//
const chalk = require('chalk');
const log = console.log;
const fs = require('fs');
const path = require('path');
const marked = require("marked");

//Si no es archivo .md se arroje error, sino que lea funcion callback que sino da error extraiga links
let mdPath = process.argv[2];
const links = (path)=>{
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
 console.log(links);

 // if(mdPath.includes(".")) {
//   fs.readFile(mdPath, 'utf-8', function(err, data) {
//     if(err) {
//       console.log(err);
//     }
//     console.log(data);
//   });
// } 
// else {
//   fs.readdir(mdPath, 'utf-8', function(err, data) {
//     if(err) {
//       console.log(err);
//     }
//     // else{ 
//     //   fileHound.create()
//     //   .paths('mdPath')
//     //   .ext('.md')
//     //   .find()
//     //   files.then(files => {
//     //       files.forEach(file => {
//     //         console.log('Found file', file);
//     //       })
//           // .catch(err => {
//           //   console.log(err);
//           // })
//         // })
//     // }
    
//   });
// };