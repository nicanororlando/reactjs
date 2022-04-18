import React, { useState } from "react";
import { useGifs } from 'hooks/useGifs';
import Spinner from 'react-bootstrap/Spinner'
import ListOfGifs from 'componentes/ListOfGifs/ListOfGifs.js';
import TrendingSearches from "componentes/TrendingSearches/TrendingSearches";
import SearchForm from "componentes/SearchForm/SearchForm";
import './index.css';

export default function Home(){

  const {loading, gifs, keyword} = useGifs();

  return (
    <>  
      <SearchForm />
      <div className="Container">
        {loading ? (
          <Spinner animation="border" vari  ant="info" >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          ) : (
            <div className='Container-gifs'>
              <h3 className='Search-title'>{keyword ? keyword : "random"}</h3>
              <ListOfGifs gifs={gifs} />
            </div>
          )
        } 
        <TrendingSearches />
      </div>
    </>
  )
}
