#!/usr/bin/env node

//Declaraciones
const chalk = require('chalk');
const mdLinks = require('./index');
let log = console.log;
let route = process.argv[2];
route = path.resolve(route);
route= path.normalize(route);

mdLinks.getLinks(route);
mdLinks.saludar();
log(mdLinks.saludar, mdLinks.getLinks);