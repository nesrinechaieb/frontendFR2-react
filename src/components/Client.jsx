import React from 'react'
import { useState } from 'react';
import "./style.css"

const Client = () => {
    const [nom,setNom]=useState("esps")
    const [ville, setVille] = useState("sfax");
    const [adresse, setAdresse] = useState("route ain");
    const modifier =()=>{
        setNom("University")
        setVille("tunis")
        setAdresse("carthage")
    }
  return (
    <div>

<h1>nom est {nom}</h1>
<h1>ville est {ville}</h1>
<h1>adresse est {adresse}</h1>
<button onClick={()=>modifier()}>Modifier</button>


    </div>
  )
}

export default Client