import React, { useEffect, useState, useRef } from 'react'
import getTrendingTerms from 'services/getTrendingTerms'
import Category from '../Category/Category'

function TrendingSearches() {
  const [trends, setTrends] = useState([])
  
  useEffect(function () {
    getTrendingTerms()
      .then(setTrends)
  }, [])

  return <Category id= 'qcy' name='Tendencias' options={trends} />
}

// Para evitar que el componente se cargue cuando no lo estemos viendo.
export default function LazyTrending() {
  const [show, setShow] = useState(false);

  /* Parecido a un state, pero la diferencia en este caso cuando cambia el valor
  NO se vuelve a renderizar el componente, mientras q en useState si. */
  const elementRef = useRef() 

  useEffect(function () {

    const onChange = (entries) => {
      const el = entries[0]
      if(el.isIntersecting){
        setShow(true)
        observer.disconnect()
      }
    }

    /* Esta API nos permite (entre otras cosas) detectar cuando un elemento esta
    en el ViePort. Recibe dos parametros: 1. El callback que se ejecutara cada vez que haya una 
    actualizacion sobre lo que se esta observando. 2. Un objeto de opciones. */
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px' //Margen para cargar un poco antes el elemento.
    })
    observer.observe(elementRef.current)  //.current para acceder al valor de la ref.
    return () => observer.disconnect()
  })

  return (
    <div ref={elementRef}>
      {show ? <TrendingSearches /> : null}
    </div>
  )
}