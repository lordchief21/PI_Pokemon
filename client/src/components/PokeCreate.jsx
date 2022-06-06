import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon,getTypes } from "../actions";


export default function PokeCreate() {

    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    const [input, setInput] = useState({

        name: "",
        health: "",
        strength: "",
        defense: "",
        speed: "",
        height: "",
        weight:"",

    })






    return ( 
        0
    );
}
