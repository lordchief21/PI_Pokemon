import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../actions";



export default function NavBar() {
   // Variables para el state 
    const dispatch = useDispatch();
    const [PokeName, setPokeName] = useState("");


    //Handlers

    function handlerOnSubmit(e) {
        e.preventDefault()
        dispatch(getPokemonsByName(PokeName))
    }


    function handlerNameChange(e) {
        e.preventDefault();
        setPokeName(e.target.value)

    }
   

    
    
    return (
    <div>
        <div>
            <a href="#">Home</a>
            <a href="/pokeCreate">PokeDetalles</a>
        </div>


        <div>
            <input 
                type="text"
                placerholder = "Buscar Pokemon...."
                onChange={n => handlerNameChange(n)}
            />
            <button type="submit" onClick={n => handlerOnSubmit(n)}>Buscar</button>

        </div>

        
        
    </div>
)}