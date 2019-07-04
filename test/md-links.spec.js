const mdLinks = require ('../md-links.js');

// works with promises and use `toEqual`
// describe('mdLinks', () => {
  // it('Deberia retornarme 1 link encontrado en el archivo prueba.md', () => {
  //   expect.assertions(1);
  //   return mdLinks.arrayHref(prueba)
  //   .then(res => {
  //     expect(res.href)
  //     .toEqual('https://github.com/workshopper/learnyounode')
  //   });
  // });
  // it('Deberia retornarme 1 text del link del archivo prueba.md', () => {
  //   expect.assertions(1);
  //   return mdLinks.arrayHref(prueba)
  //   .then(res => {
  //     expect(res.text)
  //     .toEqual('archivo de prueba')
  //   });
  // });
//   test('Deberia retornarme 1 route encontrado del archivo prueba.md', () => {
//     expect.assertions(1);
//     return mdLinks.arrayHref(prueba)
//     .then(res => {
//       expect(res.route)
//       .toEqual('C:\Users\Isa y Henry\Documents\Gaba\Laboratoria\SCL009-md-links\prueba.md')
//     });
//   });
// });

// const mdLinks = require('./../md-links.js');


// Use `toEqual`
test("Deberia retornarme 3 links del archivo prueba.md", () => {
  return mdLinks.arrayHref('/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md')
  .then(res => {
    expect(res.href)
    .toEqual([ 'http://github.com/workshopper/learnyounode'] );
    console.log(res);
  });
});

// describe('mdLinks', () => {
//   it("Deberia retornarme 1 link encontrado en el archivo prueba.md", async() => {
//     await expect(mdLinks.arrayHref('./prueba.md'))
//     resolves.toEqual( [ 'http://github.com/workshopper/learnyounode' ] )
// });
// });