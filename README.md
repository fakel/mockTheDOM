# mockTheDOM

Un ejemplo de como usar JSDOm para mockear el dom de nuestro proyecto

## Archivos

Encontrarás los siguientes archivos

- `src`: carpeta de nuestro site
    - `index.html`: nuestro HTML principal
    - `index.js`: un JS que se importa directamente en el HTML
- `test`: la carpeta donde encontrarás nuestro test
    - `ìndex.spec.js`: el test para nuestro DOM

## Correr los test

Sólo deberás ejecutar el comando

```bash
npm run test
```

## Importante

Dado que estamos haciéndole una prueba al `index.html` y lo que este cargue en adelante, verás que no saldrá ningún archivo en el coverage, esto no es un problema por lo que no debes preocuparte
