#!/usr/bin/env node

//Declaraciones, Modulos, librerias
// const chalk = require('chalk');
// const log = console.log;
const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');
const marked = require("marked");
// const fetch = require('node-fetch');

//module.exports = () => {
//  // ...
//};

//-Declaro mi route
let route = process.argv[2];
route = path.resolve(route);
route= path.normalize(route);
console.log(route); // console muestra la ruta

//-Funcion Files con FileHound
let files= fileHound.create()
.paths(route)
.ext('md')
.find();
files
  .then(res => {
    res.forEach(element => {
      console.log(element) //console muestra archivos md
      links(element);
      console.log(links(element));
    })
  })
  .catch((err) => {
    console.log(err)
});

//-Funcion Links con Marked
let links = (path => {
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
        title:title 
      })
    }
    marked(data, {renderer:renderer})
    // console.log(links)//console muestra links
  })
})

Example export e import con bb
let welcome = 'Hola Mundo';
module.exports = {
  welcome: welcome,
  saludar: () => {
    log(chalk.bold.underline.bgBlack('Bienvenidos'));
  }
};
