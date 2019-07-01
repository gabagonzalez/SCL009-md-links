// const mdLinks = require('../');


// // describe('mdLinks', () => {

// //   it('should...', () => {
// //     console.log('FIX ME!');
// //   });

// // });


const mdLinks = require('./../md-links.js');
const prueba = require('/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md'); 

// test("Deberia retornarme 2 links del archivo prueba.md", () => {
//   expect(mdLinks.arrayHref(prueba)).toEqual(
        
//         {"route":"/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md",
//         "text":"learnyounode","href":"https://github.com/workshopper/learnyounode"},
//         {"route":"/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md",
//         "text":"Acerca de Node.js - Documentación oficial","href":"https://nodejs.org/es/about/"}
        
//         );
// });

// For deep equality (obj, arr) only, use `toEqual`
test("Deberia retornarme 1 link del archivo prueba.md", () => {
  expect.assertions(0);
  return mdLinks.arrayHref(prueba)
  .then(res => {
    expect(res.href).toEqual("https://github.com/workshopper/learnyounode")
  });
});

// // Async fetch (axios) data
// test("Deberia retornarme 2 links del archivo prueba.md con href", () => {
//   expect.assertions();
//   return mdLinks.arrayHref()
//     .then(res => {
//       expect(res.elemente.href ).toEqual(
        
//         {"route":"/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md"
//         // "text":"learnyounode","href":"https://github.com/workshopper/learnyounode"
//       }
//         // {"route":"/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md",
//         // "text":"Acerca de Node.js - Documentación oficial","href":"https://nodejs.org/es/about/"}
        
//         );
//     });
// });