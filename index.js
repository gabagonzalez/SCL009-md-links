#!/usr/bin/env node 
// "strict use"

//1***Declaration Modules/libraries/Constante
// const chalk = require('chalk');
const mdLinks = require('../SCL009-md-links/md-links.js'); // Importando funcion mdLinks desde md-links.js

//2***Declaration of the Variables
let route = process.argv[2];
let options = process.argv[3];
let validate = false;
let stats = false;

// los dos valores ingresados en consola seran los parametros de la funcion importada
executeModuleMdLinks = (route, options) =>{
    mdLinks.mdLinks(route,options);
        
}
executeModuleMdLinks(route, options)

