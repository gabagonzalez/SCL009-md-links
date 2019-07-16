const mdLinks = require ('../md-links.js');

// Works with promises and use `toEqual`
describe('mdLinks', () => {
  //N°1
  it('Deberia retornarme ruta absoluta del archivo prueba.md', async() => {
    expect.assertions(1);
    await expect(mdLinks.pathConvertAbsolute('\prueba.md'))
    .toEqual("/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md")
  });
  //N°2
  it('Deberia retornarme ruta absoluta del directorio /prueba2', async() => {
    expect.assertions(1);
    await expect(mdLinks.pathConvertAbsolute('\prueba2\prueba3.md'))
    .toEqual("/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba2prueba3.md")
  });
  //N°3
  it('Debería retornar link desde el archivo prueba.md', async() => {
    expect.assertions(1);
    await expect(mdLinks.getFromFile("/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md"))
    .resolves.toEqual([{"href":"http://github.com/workshopper/learnyounode","route":"/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba.md", "text": "archivo de prueba"}])
  });
  //N°4
  it('Debería retornar file desde el directorio src', async() => {
    expect.assertions(1);
    await expect(mdLinks.getFromDirectory("/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/src"))
    .resolves.toEqual(['prueba4'])
  });
  //N°5
  it('Debería retornar error "undefined" con el archivo prueba3.md, que no existe', async() => {
    expect.assertions(1);
    await expect(mdLinks.callFileOrDirectory('\prueba3.md'))
    .toEqual(undefined)
  });
  //N°6
  it('Debería retornar error "undefined" con el directorio src1, que no existe', async() => {
    expect.assertions(1);
    await expect(mdLinks.callFileOrDirectory('\src1'))
    .toEqual(undefined)
  });
  //N°7
  it('Debería retornar error "undefined", con link  que no existe, desde el archivo prueba1.md', async() => {
    expect.assertions(1);
    let link = [{ route: '/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/prueba1.md', text: 'otra cosa', href: 'https://otra-cosa.net/algun-doc.html' } ];
    await expect(mdLinks.validateLinks(link))
    .toEqual(undefined)
  });
  //N°8
  it('Debería retornar error "undefined", con link que no existe, desde el directorio src', async() => {
    expect.assertions(1);
    let link = [{ route: '/home/laboratoriad172/Documentos/GGonzalez/SCL009-md-links/src', text: 'otra cosa', href: 'https://otra-cosa.net/algun-doc.html' } ];
    await expect(mdLinks.validateLinks(link))
    .toEqual(undefined)
  });
  
});