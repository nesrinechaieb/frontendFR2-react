import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

const Facture = () => {
  const [fact, setFact] = useState(
    {
    //state objet
    
      "numfact": 100,
      "datefact": "06/03/2024",
     "mtfact" : 1000
}
)
    
  
  const handleChange=()=>{
   setFact ({...fact,mtfact:3000})

  }
  return (
    <div>
      <div className="im">
        Facture Numero:{fact.numfact}
        date de facture:{fact.datefact}
        montant facture:{fact.mtfact}
      </div>

      <Button variant="success" onClick={()=>handleChange()}>ok</Button>
    </div>
  );
};

export default Facture;
