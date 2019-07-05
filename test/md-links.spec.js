const mdLinks = require ('../md-links.js');

// works with promises and use `toEqual`
// describe('mdLinks', () => {
  // it('Deberia retornarme 1 link encontrado en el archivo prueba.md', async() => {
  //   await expect(mdLinks.callGetLinks('\prueba.md'))
  //   .toEqual([{"href": "http://github.com/workshopper/learnyounode", "route": "C:\\Users\\Isa y Henry\\Documents\\Gaba\\Laboratoria\\SCL009-md-links\\prueba.md", "text": "archivo de prueba"}]);
  // });
  // it('Deberia retornarme 1 link encontrado en el archivo prueba.md', () => {
  //   expect(mdLinks.callGetLinks('\prueba.md'))
  //   .toEqual([{"href": "http://github.com/workshopper/learnyounode", "route": "C:\\Users\\Isa y Henry\\Documents\\Gaba\\Laboratoria\\SCL009-md-links\\prueba.md", "text": "archivo de prueba"}]);
  //   });
  it('Deberia retornarme 1 link del archivo prueba.md', () => {
    expect.assertions(0);
    expect(mdLinks.getLinks('/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md"'))
    
      resolves.toEqual([ { route: '/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md',
      text: 'archivo de prueba',
      href: 'http://github.com/workshopper/learnyounode' } ])
    
  });


// Use `toEqual`
// test("Deberia retornarme 1 link del archivo prueba.md",() => {
//   return mdLinks.callGetLinks('\prueba.md')
//   .then(res => {
//     // console.log(res);
//     expect(res)
//     .toEqual([{href:'http://github.com/workshopper/learnyounode'}]);
   
//   });
// });

// describe('mdLinks', () => {
//   it("Deberia retornarme 1 link encontrado en el archivo prueba.md", async() => {
//     await expect(mdLinks.callGetLinks('\prueba.md'))
//     .toEqual( [{ route: 'prueba.md',
//     text: 'archivo de prueba',
//     href: 'http://github.com/workshopper/learnyounode' } ] )
// });
// });