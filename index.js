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

// option.validate = false;
// options.stats = false;

// Valores ingresados: seran los parametros de la funcion importada.
executeModuleMdLinks = (route, options) => {
 

    if(options === '--validate' || options ==='--v'){ 
        let options = {};
        return options.validate = true;
      }
       if(options==='--stats' || options ==='--s'){ 
        let options = {};
        return options.stats = true;
      }
      else if(options ==='--stats --validate ' || options ==='--validate --stats '){
      let options = {};
        return options = true;
      }
   
   
      mdLinks.mdLinks(route,options)
    //   .then(res, option.validate === true) {

    //     // aqui los link es res y hacer lo demas con el validate 
    //   }

}
executeModuleMdLinks(route, options)

