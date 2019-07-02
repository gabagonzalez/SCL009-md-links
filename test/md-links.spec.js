const mdLinks = require('./../md-links.js');


// Use `toEqual`
// test("Deberia retornarme 1 link del archivo prueba.md", () => {
//   expect.assertions(0);
//   return mdLinks.arrayHref('./prueba.md')
//   .then(res => {
//     expect(res.text).toEqual("learnyounode");
//   });
// });

// With async/await
describe('mdLinks', () => {
  it("Deberia retornarme 1 link encontrado en el archivo prueba.md", async() => {
    await expect(mdLinks.mdLinks('./prueba.md'))
    .resolve.toEqual( [ 'http://github.com/workshopper/learnyounode' ] )
});
});
