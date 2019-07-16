#!/usr/bin/env node 
// "strict use"

//A-Declaration Modules/libraries/Constante //Import function mdLinks(md-links.js)
const mdLinks = require('../SCL009-md-links/md-links.js'); 
const colors = require('colors');

//B-Declaration of the Variables for route and options.
let route = process.argv[2];
let options = [process.argv[3],process.argv[4]];

//C-Function CallPromise MDlinks.mdlinks (module or ejecutable)
if(require.main === module ) {

  executeModuleMdLinks = (route, options) => {
    //1 Import Promise MdLinks
    mdLinks.mdLinks(route, options)

    //2-CallGetFromFile.
    mdLinks.callFromFile= (route)=> {
      mdLinks.getFromFile(route)
      .then(res=> {
      
        //PromiseALl Links/ValidateLinks/StatsLinks.    
        return Promise.all(res, mdLinks.validateLinks(res))
        .then(res => {
          //ArrayLinks
          let href= res;
          res.map(element=> {
            //Validate
            element.status= res;
            console.log(res);
            if (res ===!200) {
              res = element.response;
              element.response = "fail";
            }
            else {
              element.response = "ok, 200";
            }
            //Stats: Total and Unique
            element.total= res.length;
            let uniqueLink= new Set(href);
            element.unique = uniqueLink.size;
          
            // Finally Conditional; Execute the route to the next action by options.
            let arrayLinks= colors.green(element.route)+ " "+ colors.cyan(element.href) +"  "+ colors.blue.bgBlack(element.text);
            let linkValidate= colors.cyan(element.route)+ " "+ colors.magenta(element.href) +" "+colors.yellow.bgBlack(element.response)+" "+ colors.rainbow(element.text);
            let linkStats= colors.yellow("TOTAL LINKS: "+ element.total)+ " "+ colors.green("UNIQUE LINKS: "+ element.unique);
         
            // Option: with Validate
            if (options[0]==="--validate" || options[0]==="--v"){
              console.log(linkValidate);
            }
            // Option: with Stats
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
        console.log(colors.red("OOPPss, Algo salio Mal!, Err catch : " + err));
        return err;
      })
    }  
  }
}
executeModuleMdLinks(route, options);

