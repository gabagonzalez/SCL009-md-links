// Utilizando async functions:

// const util = require('util');
// const fs = require('fs');

// const stat = util.promisify(fs.stat);

// async function callStat() {
//   const stats = await stat('.');
//   console.log(`This directory is owned by ${stats.uid}`);
// }
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