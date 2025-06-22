import { useState } from 'react';

const Card = ({a,y}) => {
   const[hasLiked, setHasLiked]=useState(false);
  return (
    <div className='card'>
      <h2>{a}<br/>{y}</h2>
      <button onClick={()=> setHasLiked(!hasLiked)}>
        {hasLiked ? '👌':'❤️'}
      </button>
    </div>
  )
}

export default Card
