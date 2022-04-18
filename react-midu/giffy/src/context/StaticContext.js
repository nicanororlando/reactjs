import React from "react";

/* Creamos este contexto con ese valor que es el que vamos a tener por defecto si
  en el lugar donde lo llamamos no tenemos acceso por que no lo proveemos. 
    Despues de crearlo tenemos 2 variantes: 
    1. A donde lo proveemos, osea en que lugares de nuestra pagina podemos acceder (app.js).
    2. Donde lo queremos consumir (Detail). 
*/ 

const Context = React.createContext({
  name: 'canor', 
  soyUnaMaquina: false
})

export default Context;