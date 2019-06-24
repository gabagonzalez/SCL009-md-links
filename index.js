#!/usr/bin/env node
//
const chalk = require('chalk');
const log = console.log;


const mdLinks = require('./src/md-links.js');
mdLinks.saludar();
log(chalk.bold.bgMagenta(mdLinks.welcome));
// mdLinks.links();









//5-Example FileHound, devuelve archivos md
//
// const FileHound = require('FileHound');
// const processArgv = process.argv[2];
// // const arguLine, no olvidar proccess argu
// FileHound.create()
// .paths(processArgv)
// .ext('md')
// .find()
// files.then(files => {
//   files.forEach(file => {
//     console.log('Found file', file)
//   })
//   .catch(err => {
//        console.log(err);
// })
// })

//5-Example FileHound too
//
// const FileHound = require('FileHound');
// const processArgv = process.argv[2];
// const files = FileHound.create()
//   .paths(processArgv).ext('md').find();
 
// files.then(console.log)
//   .catch(err => {
//     console.log(err);
// })

//6-Example creando archivoJson TemplateString

// const processArgv = process.argv[0];
// console.log(processArgv[2]);
// const fs = require ('fs');
// const os = require('os');
// let cpu = os.cpus();
// // let system = os.platform();
// // let user = os.hostname();

// let cpu_string = JSON.stringify(cpu);
// fs.appendFile('prueba.txt',`\n Informacion del cpu: ${cpu_string} `, function(error) {
// if(error) {
//     console.log('Error al crear archivo');
// }
// });

