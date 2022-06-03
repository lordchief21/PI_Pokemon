import React from "react";



export default function NavBar(typeName) {
    
   
    
    const typeNames =typeName.typeName;

   

    

  

    

    console.log(typeNames)

    
    
    return (
    <div>
        <div>
            <a href="#">Home</a>
            <a href="#">PokeDetalles</a>
        </div>
        <div>
            <select >
               {
                   typeNames?.map(t => (
                       <option value={t}>{t}</option>
                       
                   ))
               }
            </select>
        </div>
    </div>
)}