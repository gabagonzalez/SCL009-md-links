#!/usr/bin/env node

//Declaraciones, Modulos, librerias
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");
// const fetch = require('node-fetch');
// const chalk = require('chalk');


//module.exports = () => {
//  // ...
//};
// let log = console.log;
// log(chalk.bgMagenta('welcome'));

//-Declaro route
let route = process.argv[2];
route = path.resolve(route);
route= path.normalize(route);
// console.log(route); // console muestra la ruta



// Extraigo archivos md
let files = fileHound.create()
  .paths(route)
  .ext('md')
  .find();
 
files
.then(res => {
    res.forEach(element => {
      // let mdString = JSON.stringify(element);
      console.log(element) //console muestra archivos md
    //   links(element);
    //   console.log(links(element));
    })
  })
  .catch((err) => {
    console.log(`no hay archivo md`,(err))
})

//Declaro Promesa
let getLinks = (path) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(route, 'utf-8', function(err, data) {
              
            if(err) {
                reject(err);
                console.log("error al leer")
            }
            else {
                let links=[];
                const renderer = new marked.Renderer();
                renderer.link = function(href, title, text){
                    links.push({
                        href:href, 
                        // text: text,
                        //   file: path,
                        //   title:title
                    })
                }

                marked(data,{renderer:renderer});
                resolve(links);
                let linkString = JSON.stringify(links);
                // console.log(`Listado de Links formato JSON : ${linkString}`);
            }
        })  
    })
}
  // console.log(getLinks(route))

//Llamado de la Promise
  getLinks(route)
  .then(res=> {
    console.log("el resultado es :", res);
  })
  .catch(err=> {
    console.log("err catch :", err);
  })