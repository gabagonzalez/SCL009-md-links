const mdLinks = require('../');


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });


const mdLinks = require('../src/md-links.js');

test("Deberia retornarme 3 links del archivo prueba.md", () => {
  expect(mdLinks.getLinks('../prueba.md'))
    .toEqual({ 
      [ { href: 'https://github.com/workshopper/learnyounode' },
        { href: 'https://nodejs.org/es/about/' },
        { href: 'https://nodejs.org/api/fs.html' }]
    });
});
