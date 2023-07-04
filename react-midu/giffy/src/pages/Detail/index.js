import React, {useContext} from "react";
import Gif from "componentes/Gif/Gif";
import GifContext from 'context/GifsContext';
import './index.css';

export default function Detail({params}) {
  const {gifs} = useContext(GifContext)
  const gif = gifs.find(singleGif => 
    singleGif.id === params.id
  )

  return (
    <div className="DetailGif">
      <p>Puedes obtener este gif desde <a href={`${gif.url}`} target='_blank'>aqui</a></p>
      <Gif {...gif} />
    </div>
  )
}