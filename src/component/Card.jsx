import { useState,useEffect } from "react";
const Card = ({title,artist}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(()=> {
    console.log(`${title} has been liked: ${hasLiked}`);
},[hasLiked])

  return (
    <div className="card" onClick={()=>setCount(count+1)}> 
      <h2>{title} <br /> {artist} <br />{count}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        { hasLiked ? '❤' : '🤍' }
      </button>
    </div>
  )
}

export default Card