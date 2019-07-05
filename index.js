#!/usr/bin/env node 
// "strict use"

//Si es module or ejecutable
// if(main.require === module ) {
// }

//1***Declaration Modules/libraries/Constante
// Importando funcion mdLinks desde md-links.js
const mdLinks = require('../SCL009-md-links/md-links.js'); 

//2***Declaration of the Variables
let route = process.argv[2];
let firsOption = process.argv[3];
let secondOption = process.argv[4];
let options = firsOption+ " "+secondOption;
// console.log(options);
options.validate = false;
options.stats = false;

// Valores ingresados: seran los parametros de la funcion importada.
executeModuleMdLinks = (route, options) => {
  if(options === '--validate' || options ==='--v'){ 
    // let options = {};
    console.log("con validate");
    return options.validate = true;
  }
  if(options==='--stats' || options ==='--s'){ 
    // let options = {};
    console.log("con stats");
    return options.stats = true;
  }
  else if(options ==='--stats --validate ' || options ==='--validate --stats '){
    // let options = {};
    console.log("con ambas options");
    return options = true;
  }
  mdLinks.mdLinks(route,options)
  //   .then(res, option.validate === true) {
  // aqui los link es res y hacer lo demas con el validate 
  //   }
  }

    //-Call Promise run the route to the next action with options
// executeModuleMdLinks = (route, options) => {
//   promise
//   .then(res => {
//     mdLinks.arrayHref(res);
//     console.log( chalk.green(element.route)+ " "+ chalk.cyan(element.href) +"  "+ chalk.blue.bgBlack(element.text));
//     if(options === 'undefined') { 
//       // let options = {};
//       mdLinks.arrayHref(res);
//       return options = true;
//     }
//     if(options === '--validate'|| options === '--v') {
//       mdLinks.callGetLinks(route)
//       // console.log("con validate");
//       return options.validate = true;
//     }
//     if (options === '--stats' || options === '--s'){ 
//       // let options = {};
//       // console.log("con stats");
//       return options.stats = true;
//     }
//   })
//   .catch( err => { 
//     console.log(err); 
//   })
// mdLinks.mdLinks(route,options)
// }

executeModuleMdLinks(route, options);

// example promise
// let otherPromise = new Promise((resolve, reject) => {
  //   setTimeout(() =>resolve(5), 2000);
  // });
  // otherPromise
  // .then(res => {
  //   res += 5;
  //   console.log(res);
  // });