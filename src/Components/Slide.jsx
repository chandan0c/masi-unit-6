import { useEffect } from "react"
import { useState } from "react"


function Slide(props) {
  const [data,setData]=useState([])
  useEffect(()=>{
    if(props.data){
      setData(props.data)
    }
  },[props.data])
  return (
    
    <div className="slide-container" data-cy="slide">
      <h1>{data.id}</h1>
      <h3 data-cy="title" >{data.title}</h3>
      <p data-cy="description">{data.description}</p>
    </div>

   
  );
}

export default Slide;
