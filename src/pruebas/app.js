//Example export e import con bb

// let welcome = 'Hola Mundo';

// module.exports = {
//   welcome: welcome,
//   saludar: () => {
//     log(chalk.bold.underline.bgBlack('Bienvenidos'));
//   }  
// }


//md

// const mdLinks = (path,options) => {
//   if(options && options.validate){
//       return new Promise((resolve,reject)=>{
//           extractMDFromDirectory(path)
//               .then((paths)=>{
//                   Promise.all(paths.map((pathInFolder)=>{                    
//                       return extractLinksFromFile(pathInFolder);                    
//                   })).then((linksInFolder)=>{
//                       Promise.all(linksInFolder.map((linkInFolder)=>{                        
//                           return validateLink(linkInFolder);
//                       })).then((validateLinks)=>{
//                           resolve(validateLinks);
//                       })
//                   });                    
//                   }).catch(()=>{
//                       extractLinksFromFile(path)
//                       .then((links)=>{
//                           resolve(validateLink(links)); 
//               })
//           })
//       })
//   }
// }
