// Obtenemos el elemento raíz
const root = document.getElementById('app')

// creamos el primer boton
const button1 = document.createElement('button')
// le ponemos un contenido
button1.innerText = 'This is a Button'

// creamos el segundo boton
const button2 = document.createElement('button')
// le ponemos un contenido
button2.innerText = 'This is another Button'

// primera función que queremos probar
function itWorks1(myArg) {
  console.log('Primera funcion');
}

// segunda función que queremos probar
function itWorks2(myArg) {
  console.log('Segunda funcion');
}

// agregamos los listeners
button1.addEventListener('click', itWorks1)
button2.addEventListener('click', itWorks2)

// agregamos los elementos al DOM
root.appendChild(button1)
root.appendChild(button2)
