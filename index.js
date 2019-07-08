#!/usr/bin/env node 
// "strict use"

//Si es module or ejecutable
// if(main.require === module ) {
// }

//A-Declaration Modules/libraries/Constante //Import function mdLinks(md-links.js)
const mdLinks = require('../SCL009-md-links/md-links.js'); 
const chalk = require('chalk');
const colors = require('colors');

//B-Declaration of the Variables for route and options.
let route = process.argv[2];
let options = [process.argv[3],process.argv[4]];
// options.validate = false;
// options.stats = false;

//C-Function CallPromise MDlinks.mdlinks
executeModuleMdLinks = (route, options) => {
 
  //1 Import Promise MdLinks
  mdLinks.mdLinks(route, options)

  //2-Call to Promise GetFromFile.
  mdLinks.callFromFile= (route)=> {
    mdLinks.getFromFile(route)
    .then(res=> {

      //PromiseALl calls promises ValidateLinks and Statslinks.    
      return Promise.all(res, mdLinks.validateLinks(res))
      .then(res => {
        //array
        let href= res;
        res.map(element=> {
          //validate
          element.status= res;
          if (res ===!(200)) {
            res = element.response;
            element.response = "fail";
          }
          else {
            element.response = "ok, 200";
          }
          //stats, total and unique
          element.total= res.length;
          let uniqueLink= new Set(href);
          element.unique = uniqueLink.size;
          
          // Finally conditional; Execute the route to the next action by options.
          let arrayLinks= chalk.green(element.route)+ " "+ chalk.cyan(element.href) +"  "+ colors.blue.bgBlack(element.text);
          let linkValidate= colors.america(element.route)+ " "+ chalk.magenta(element.href) +" "+chalk.yellow.bgBlack(element.response)+" "+ colors.rainbow(element.text);
          let linkStats= colors.yellow("TOTAL LINKS: "+ element.total)+ " "+ chalk.green("UNIQUE LINKS: "+ element.unique);
         
          // Option: with Validate
          if (options[0]==="--validate" || options[0]==="--v"){
            console.log(linkValidate);
          }
          // Option: with linkStats
          if (options[0]==="--stats" || options[0]==="--s"){
            console.log(linkStats);
          }
          // Zero Options
          else if(options[0]=== undefined){
            console.log(arrayLinks);
          }
          return linkValidate, linkStats, arrayLinks;
        })
      })
    })  
    .catch(err=> {
      console.log(chalk.red("OOPPss, Algo salio Mal!, Err catch : " + err));
    })
  }  
}

executeModuleMdLinks(route, options);

