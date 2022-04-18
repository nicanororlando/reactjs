import React, { useContext, useState, useEffect} from "react";
import getGifs from '../services/getGifs.js';
import GifsContext from "../context/GifsContext.js";

const INITIAL_PAGE = 0

export function useGifs({keyword = ''} = {} ){
  // const [gifs, setGifs] = useState([]);
  const {gifs, setGifs} = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const keywordToUse = keyword ? keyword 
    : localStorage.getItem('lastKeyword') || 'random' //Recuperamos

  //Este HOOK nos permite ejecutar una funcion cada vez que se renderice nuestro componente.
  useEffect(function() {
    setLoading(true);

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword); //Guardamos
     });
    }, [keyword, keywordToUse, setGifs])  /*Los corchetes estan para que esta funcion solo se ejecute la 
      primera vez, si no los ponemos, la funcion entraria en un bucle infinito ya 
      que la funcion se ejecutaria cada vez que se renderice el componente, y 
      como estamos llamando al setGifs y actualizando el estado, esto se haria infinitamente.
        En esos corchetes entonces, va ubicada la dependencia del useEffect, si esta 
      vacio solo se renderiza la primera vez, pero como nosotros queremosir actualizando
      el keyword cuando se quiera, necesitamos que se renderice cada vez q se actualice,
      y por eso le ponemos como dependencia esa prop, entonces cada vez q cambia ese
      keyword, se actualiza y se renderiza todo de nuevo. */

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {

        /* Le pasamos al actualizador de estados una funcion que devuelve como 
        parametro el estado anterior. */
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setGifs])

  return {loading, loadingNextPage, gifs, keyword, setPage}
} 