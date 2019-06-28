#!/usr/bin/env node

// //Declaraciones

// let log = console.log;
// let route = process.argv[2];
// route = path.resolve(route);
// route= path.normalize(route);

//import example
// mdLinks.saludar();
// log(mdLinks.saludar, mdLinks.getLinks);
// const chalk = require('chalk');

//Declaraciones

const mdLinks = require('../index.js');

//Llamado de la Promise getlinks
mdLinks.getLinks(route)
.then(res=> {
  log( res);
})
.catch(err=> {
  log("Err catch :", err);
})