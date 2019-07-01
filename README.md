# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

### **GG-Md-links**
----
Extrae los links de tus directorios y/o archivos markdown (.md), valida su status y obten algunos datos estadísticos.

### **Instalación**
----

npm install gg-md-links

### **Guía de uso**
---
const md-links = require ( 'gg-md-links' ) ;

---


Para ejecutar esta librería debes hacerlo de la siguiente manera: Primero escoger que es lo que necesitas analizar (archivo o directorio):

**Por ejemplo:**

- Lectura de archivos con extensión .md
md-links <path-to-file>



$ md-links ./example.md

./example.md http://algo.com/2/3/ Link a algo

./example.md https://otra-cosa.net/algun-doc.html algún doc


---
- Lectura de un directorio
md-links <path-to-directory>

$ md-links ./some/example.md

./some/example.md http://algo.com/2/3/ Link a algo

./some/example.md https://otra-cosa.net/algun-doc.html algún doc



---

En ambos casos, se identifican el o los archivos markdown y se obtiene como resultado:

- href: link encontrado.
- text: descripción del link.
- file: archivo o ruta donde fue encontrado el link .

