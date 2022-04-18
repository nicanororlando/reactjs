import React, { useState } from "react";
import { Link, useLocation} from "wouter";

export default function SearchForm() {
  const [keyword, setKeyword] = useState('');

  /*Este hook devuelve un array de dos posiciones: en la primera pos tendriamos el 
  path en donde estamos, y en la segunda posicion le pasamos la navegacion para ir. */
  const [path, pushLocation] = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`); //Navegamos a otra ruta
  }

  const handleChange = event => {
    setKeyword(event.target.value); 
  }

  return (
    <>
      <h3 className="App-title">Buscador de Gifs</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Buscar Gif..." onChange={handleChange} type='text' value={keyword} />
        <button className="btn-buscar">Buscar</button>
      </form>
    </>
  )
}