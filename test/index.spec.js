const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Cómo probar algo que está en el Dom
describe('dom tests', () => {
  // En este test queremos ver algo que saldrá en la consola, JSDOM nos deja acceder a esa consola virtual
  const virtualConsole = new jsdom.VirtualConsole();

  // Creamos primero nuestro dom virtual usando nuestro index
  beforeAll((done) => {
    JSDOM.fromFile("src/index.html", { 
      runScripts: "dangerously", //necesitaremmos usar los scripts que importammos en el html
      resources: "usable", //igualmente los externos
      virtualConsole // insertamos nuestra consola virtual
    })
    .then(dom => { //ya tenemos nuestro dom
      global.document = dom.window.document // no es recomendado pero creamos nuestro document de forma global para reemplazar el window.document
      global.virtualConsole = dom.virtualConsole // tambien la consola para poder usarla después
      done() // listo, pasamos a las pruebas
    });
  })

  it('load dom', () => {
    // verificammos que tenemos dom
    expect(document).not.toBe(undefined)
  })

  it('find app', () => {
    // verificamos que tenemos el elemto raíz
    const root = document.getElementById('app');
    expect(root).not.toBe(undefined)
  })

  it('trigget event listener for button1', (done) => {
    // fijamos nuestro primer ecuchador de evento de la consola
    // fijense en el once
    virtualConsole.once('log', (msg) => {
      // cuando suceda el evento probaremos que el
      // console.log se llamo con lo que esperamos para el primer boton
      expect(msg).toBe('Primera funcion')
      done()
    })
    // esperamos un momento a la carga de los scripts
    setTimeout(() => {
      // seleccionamos el elemento raíz con nuestro dom virtual
      const element = document.getElementById('app');
      // obtenemos el primer boton usando getElementsByTagName
      const button = element.getElementsByTagName('button')[0];
      // forzamos el click con click()
      button.click();
    }, 500)
  })

  it('trigget event listener for button2', (done) => {
    // fijamos nuestro segundo ecuchador de evento de la consola
    // fijense en el once
    virtualConsole.once('log', (msg) => {
      // cuando suceda el evento probaremos que el
      // console.log se llamo con lo que esperamos para el segundo boton
      expect(msg).toBe('Segunda funcion')
      done()
    })
    // esperamos un momento a la carga de los scripts
    setTimeout(() => {
      // seleccionamos el elemento raíz con nuestro dom virtual
      const element = document.getElementById('app');
      // obtenemos el segundo boton esta vez usando childNodes
      const button = element.childNodes[1];
      // forzamos el click con click()
      button.click();
    }, 500)
  })
})
