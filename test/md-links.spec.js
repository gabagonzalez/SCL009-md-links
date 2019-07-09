const mdLinks = require ('../md-links.js');

// works with promises and use `toEqual`
describe('mdLinks', () => {
  it('Deberia retornarme ruta absoluta de prueba.md', () => {
    expect.assertions(1);
    expect(mdLinks.pathConvertAbsolute('..\prueba.md'))
    .toEqual("C:\Users\Isa y Henry\Documents\Gaba\Laboratoria\SCL009-md-links\prueba.md")
    
  });
  // it('Deberia retornarme 1 link encontrado en el archivo prueba.md', async() => {
  //   await expect(mdLinks.callGetLinks('\prueba.md'))
  //   .toEqual([{"href": "http://github.com/workshopper/learnyounode", "route": "C:\\Users\\Isa y Henry\\Documents\\Gaba\\Laboratoria\\SCL009-md-links\\prueba.md", "text": "archivo de prueba"}]);
  // });
  // it('Deberia retornarme 1 link encontrado en el archivo prueba.md', () => {
  //   expect(mdLinks.callGetLinks('\prueba.md'))
  //   .toEqual([{"href": "http://github.com/workshopper/learnyounode", "route": "C:\\Users\\Isa y Henry\\Documents\\Gaba\\Laboratoria\\SCL009-md-links\\prueba.md", "text": "archivo de prueba"}]);
  //   });
 
});