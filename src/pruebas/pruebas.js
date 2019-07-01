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

  // getLinks.filter(element => {
  //   // if(validate === false && stats === false){
  //( href.element);
  //   // }else if(validate === true){
  //   // fetch.fetchUrl(element.href)
  //   // .then(res=> {
  //   //   console.log(element.href, res.status);
  //   // })
  //   // .catch(err =>{
  //   //   console.error("error ", err)
  //   // })
  // })
//}
  //console.log(statusUrl(getLinks));



//0-example export e import con bb

// let welcome = 'Hola Mundo';
// module.exports = {
//   welcome: welcome,
//   saludar: () => {
//     log(chalk.bold.underline.bgBlack('Bienvenidos'));
//   }
  
// }


//Promesa para el index // Funcion Con fetch
mdLinks.arrayLinks = (linksarr) => {
  linksarr.forEach(element => {
    return new Promise((resolve,reject)=> {
      fetch.fetchUrl(element.href, (error, meta, body)=> {
          if(meta) {
            resolve(meta.status);
          }else {
              reject(error);
          }
      })
  })  
      .then((res) => {
        // console.log(route);
      console.log(element.route+ "   " +   element.href+ "   "+   element.text);
      })
      .catch(err => {
      console.log(err);
      })  
  });
  }

