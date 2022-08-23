import Slide from "./Components/Slide";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides

export default function App() {
  const [data,setData]=useState([])
  const [showData,setShowData]=useState({})
   useEffect(()=>{
    fetch("https://slides-app-220822.herokuapp.com/slides")
   .then((res)=>res.json())
   .then((data)=>{
    setData(data)
    setShowData(data[0])
   })

  },[])
  
  const handleprev=()=>{
    let curent_id=showData?showData.id:1
    if(curent_id>1){
      curent_id=curent_id-1
      setShowData(data[curent_id-1])
    }
    else{
      setShowData(data[0])
    }
  }

  const handleNext=()=>{
    let curent_id=showData?showData.id:1
    if(curent_id<data.length-1){
      curent_id=curent_id-1
      setShowData(data[curent_id+1])
    }
    else{
      setShowData(data[data.length-1])
    }
  }
  console.log("check",data)
  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
      <Slide data={showData} />
      <button data-cy="prev" onClick={()=>handleprev()} disabled={showData.id===1?true:false}>Prev</button>
      <button data-cy="next" onClick={()=>handleNext()} disabled={data.length===showData.id?true:false}>Next</button>
    </div>
  );
}
