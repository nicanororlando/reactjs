import React from "react";

/* Creo un objeto Context. Cuando react renderice un componente que esta dentro de 
este contexto, voy a poder, gracias al Provider, leer el valor actual de ese provider.  */
export const AuthContext = React.createContext(null);