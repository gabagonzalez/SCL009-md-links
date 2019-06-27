const marked = require("marked");
const fs = require('fs');
let route = process.argv[2];

const mdlinks = (path) =>{
  fs.readFile(route,"utf8", (err,data) =>{
    if(err){
      throw err
    }
    let links =[];
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text)=> {
      links.push({
        href:href,
        // text:text,
        // file:path,
        // title:title
      
      })

    }
    marked(data, {renderer:renderer})
      console.log(links)
      // let linkString = JSON.stringify(links);
      // console.log(`Listado de Links formato JSON : ${linkString}`);
  })

}

console.log(mdlinks(route));