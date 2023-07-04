import './Gif.css'
import '../ListOfGifs/ListOfGifs.css';
import { Link } from 'wouter';

export default function Gif({id,title,url}) {
  return (
    <Link to={`/gif/${id}`}
      className='ListOfGifs-item'>  
          <img alt={title} src={url} />
          <h4>{title}</h4>
    </Link>
  )
} 