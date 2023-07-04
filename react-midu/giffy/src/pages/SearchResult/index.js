import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ListOfGifs from 'componentes/ListOfGifs/ListOfGifs';
import SearchForm from 'componentes/SearchForm/SearchForm';
import TrendingSearches from 'componentes/TrendingSearches/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import '../Home/index.css';
import './index.css';

export default function SearchResult ({ params }) {

  const { keyword } = params; //Esto se hace ya que si le pedimos el keyword no lo mostraria, por eso en este caso hay q pedirle los params e igualarlo a keywords.
  const { loading, gifs, setPage } = useGifs({ keyword }); //Extraemos los resultados del hook.

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return (
    <>
      <SearchForm />
      <button className='Sig-pag' onClick={handleNextPage}>Go to next page</button>
      <div className="Container">
        {loading ? (
          <Spinner animation="border" variant="info" >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : 
          <div className='Container-gifs'>
            <h3 className='Search-title'>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
          </div>
        }
        <TrendingSearches />
      </div>
    </>
  )
}

// export defalut React.memo(SearchResult, funcionComparativa)
/* React.memo lo que hace es comparar las props que le llegan, y si esas props son
iguales no repite ese renderizado. Si la funcionComparativa devuelve true, significa
que las props son iguales y no se renderizaria, y si la funcion devuelve false 
renderiza de nuevo el componente. */