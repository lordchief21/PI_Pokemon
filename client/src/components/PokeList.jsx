import {React} from 'react';
import PokeCard from './PokeCard';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPokemons } from '../actions';




export default function PokeList() {
  
  const dispatch = useDispatch();

  const pokemonsAll = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handleClick(e){
    e.preventDefault();
    dispatch(getPokemons())
  }


  return (
    <div>
      <h1>ESTO ES UNA PRUEBA DE POKEMON</h1>
      <button onClick={e => {handleClick(e)}}>NO ME ROMPAS PLIS!!</button>

      {
        pokemonsAll?.map(p => {
          return(

            
          <PokeCard name={p.name} id={p.id} type={p.types} />
        )})
      }
    </div>
  );
}
 