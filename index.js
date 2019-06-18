
//module.exports = () => {
//  // ...
//};
//
//
//const fileUrl = URL('file:///tmp/hello');
//const fileUrl = new URL('file:///tmp/hello');
//fs.readFileSync(fileUrl);

const fs= require('fs');

fs.readFile('archivo.text','utf-8',(error,datos)=> {
if (error) {
  result;
}else{
  console.log(datos);
}
});

//