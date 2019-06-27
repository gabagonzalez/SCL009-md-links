#!/usr/bin/env node

//Declaracion Module
// const chalk = require('chalk');
const path = require('path');
const FileHound = require('filehound');
// const marked = require("marked");
// const fetch = require('node-fetch');

//module.exports = () => {
//  // ...
//};
// let log = console.log;
// log(chalk.bgMagenta('welcome'));

//-Declaro variables
let route = process.argv[2];// route user
route = path.resolve(route);// absolute
route= path.normalize(route);
// console.log(route); // console muestra la ruta

let files = FileHound.create()
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