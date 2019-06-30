// // let stats = false;
// // let validate = false;

// let fetch = (links)=>{
//     links.forEach(element => {
//     // if(validate === false && stats === false){
//     console.log(element.file, element.href);
//     // }else if(validate === true){
//     fetch(element.href)
//     .then(res=>{
//     console.log(element.file, element.href, res.status);
    
//     })
//     .catch(err =>{
//     console.error("error ", err)
//     })
//     // }
//     })
//    }
//    console.log(fetch(mdLinks))


//-Reading the Route/Directory
// let readPath = (route)=> {
//   if(!route.includes(".md")) {
//     fs.readdir(route, 'utf-8', function(err, data) {
//       if(err) {
//         console.log("1 leer dir",err);
//       }
//       console.log("1 leer dir",data);
//     });
//   } 
//   else {
//     fs.readFile(route, 'utf-8', function(err, data) {
//         if(err) {
//           console.log("2 leer file",err);
//         }
//         console.log("2 leer file",data);
//     });
//   };
// }

// Extract the "md" files
// let readRoute = (route)=> {
//   if (!route.includes(".md")) {
//     fs.readdir(route, 'utf-8', function(err, data) {
//       if(err) {
//         console.log("1 leer dir",err);
//       }
//         console.log(data);
//         let files = fileHound.create()
//         .paths(route)
//         .ext('md')
//         .find();
//         files
//         .then(res => {
//           res.forEach(element => {
//             log(chalk.bold.underline.bgBlack("Ruta Archivos tipo .md:", element)) //console muestra archivos md
//           })
//         })
//         .catch((err) => {
//           log(chalk.bgYellow(`No es directorio`,(err)))
//         })
//       }
//     })
//   }
// })


// module.exports = getLinks(route);
// module.exports = () => {
//     getLinks(route)
// .then(res=> {
//   log("el resultado es :", res);
// })
// .catch(err=> {
//   log("Err catch :", err);
// })
// }

