#!/usr/bin/env node

//Declaraciones
const chalk = require('chalk');
let log = console.log;

let mdLinks = require(route);
mdLinks.saludar();
log(chalk.bold.bgMagenta(mdLinks.welcome))
