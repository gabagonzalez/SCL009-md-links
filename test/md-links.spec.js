const mdLinks = require ('../md-links.js');
const prueba = require ('../prueba.md');

// works with promises and use `toEqual`
describe('mdLinks', () => {
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
  test('Deberia retornarme 1 route encontrado del archivo prueba.md', () => {
    expect.assertions(1);
    return mdLinks.arrayHref(prueba)
    .then(res => {
      expect(res.route)
      .toEqual('C:\Users\Isa y Henry\Documents\Gaba\Laboratoria\SCL009-md-links\prueba.md')
    });
  });
});

