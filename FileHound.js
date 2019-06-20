
//module.exports = () => {
//  // ...
//};

// const fs = require('fs');
const FileHound = require('filehound');
// const arguLine, no olvidar proccess argu
FileHound.create()
.paths('/pruebaFileHound')
.ext('md')
.find()
files
.then(files => {
  files.forEach(file =>
    console.log('Found file', file)
  );
  .catch(err => {
       console.log(err);
});

// const FileHound = require('filehound');
 
// const files = FileHound.create()
//   .paths('/pruebaFileHound')
//   .ext('md')
//   .find();
 
// files
//   .then(console.log)
//   .catch(err => {
//     console.log(err);
//   })

