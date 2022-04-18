import Gif from '../Gif/Gif.js';
import './ListOfGifs.css';

export default function ListOfGifs({ gifs }) {
  return (
    <div className="ListOfGifs">
      {
        gifs.map(({id, title, url}) => 
          <Gif 
            key={id} 
            id={id} 
            title={title}
            url={url} 

            //Tambien se podrian pasar las props de la sig manera:
            // {...singleGif}
          />
        ) 
      } 
    </div>
  )
}