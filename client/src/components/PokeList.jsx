import {React} from 'react';
import PokeCard from './PokeCard';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPokemons, getTypes } from '../actions';
import Pagination from './Pagination';
import NavBar from './NavBar';




export default function PokeList() {
  
  const dispatch = useDispatch();
  const pokemonsAll = useSelector((state) => state.pokemons);
  const [currPage, setCurrPage] = useState(1);
  const [pokesPerPage, setPokesPerPAge] = useState(12);
  const indexOfLastPoke = currPage * pokesPerPage;                //Generamos dos index para ubicarnos en el slice
  const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
  const pokesCurr =  pokemonsAll?.slice(indexOfFirstPoke, indexOfLastPoke);


  //Para filtrar por tipos
  const typesAll = useSelector((state) => state.types)
  const typeName = typesAll?.map(t => t.name)

  //console.log(typeName)

  

  const paginate = (numberOfPage) => {
    setCurrPage(numberOfPage)
  }
  
  // console.log(indexOfLastPoke)
  //console.log(pokesCurr)

   //Los useEffect

  useEffect(() => {
    dispatch(getTypes());
  },[dispatch])

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

            //Handlers

  function handleClick(e){
    e.preventDefault();
    dispatch(getPokemons())
  }

  

  //Código

  return (
    <div>
      <h1>ESTO ES UNA PRUEBA DE POKEMON</h1>
      <button onClick={e => {handleClick(e)}}>NO ME ROMPAS PLIS!!</button>

      <NavBar 
      
      typeName ={typeName}
      
      />

      <Pagination 
      pokesPerPage ={pokesPerPage}
      pokemonsAll = {pokemonsAll?.length}
      paginate = {paginate} 
      
      />
     
      
      {
        pokesCurr?.map(p => {
          return(
          <PokeCard name={p.name} id={p.id} type={p.types} />
        )})
      }


      
    </div>
  );
}
 