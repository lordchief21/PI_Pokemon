import {React} from 'react';
import PokeCard from './PokeCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPokemons, getTypes, filterPokeByType, filteredByOrigin, filteredByAlphabetic } from '../actions';
import Pagination from './Pagination';
import NavBar from './NavBar';




export default function PokeList() {
  
  const dispatch = useDispatch();
  const pokemonsAll = useSelector((state) => state.pokemons);
  
  //Renderizadores de estados
   const [currPage, setCurrPage] = useState(1);
   const [pokesPerPage, setPokesPerPAge] = useState(12);
   const [sorted, setSorted] = useState(" ")
  
   //Lógica de paginado
  const indexOfLastPoke = currPage * pokesPerPage;                //Generamos dos index para ubicarnos en el slice
  const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
  const pokesCurr =  pokemonsAll?.slice(indexOfFirstPoke, indexOfLastPoke);

 

  //Para filtrar por tipos
  const typesAll = useSelector((state) => state.types)
  const typeName = typesAll?.map(t => t.name)

  

   //Lógica de paginado

  const paginate = (numberOfPage) => {
    setCurrPage(numberOfPage)
  }
  


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

  function handleForFilterType(e) {
    dispatch(filterPokeByType(e.target.value))
  }


  function handleForFilterOrigin(o) {
    dispatch(filteredByOrigin(o.target.value))
  }

  function handleForAlphabetic(s) {
    s.preventDefault();
    dispatch(filteredByAlphabetic(s.target.value))
    setCurrPage(1);
    setSorted(`Sortered by ${s.target.value}`)

  }

  

  //Código

  return (
    <div>
      <h1>ESTO ES UNA PRUEBA DE POKEMON</h1>
      <button onClick={e => {handleClick(e)}}>NO ME ROMPAS PLIS!!</button>

      <div>
            <select onChange={e => handleForFilterType(e)}>
              <option value="ALL">All</option>
               {
                   typeName?.map(t => (
                       <option value={t}>{t}</option>
                       
                   ))
               }
            </select>
      </div>

      <div>
        <select onChange={o =>handleForFilterOrigin(o)} >
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="API">API</option>
        </select>
      </div>

      <div>
        <select onChange={s =>handleForAlphabetic(s)} >
          <option value="None">All</option>
          <option value='AtoZ'>A to Z</option>
          <option value='ZotA'>Z to A</option>
        </select>
      </div>

      <NavBar />

      
      <Pagination 
      pokesPerPage ={pokesPerPage}
      pokemonsAll = {pokemonsAll?.length}
      paginate = {paginate} 
      onChange ={t => {console.log(t.target.value)}}
      />
     
      
      {
        pokesCurr?.map(p => {
          return(
          <PokeCard name={p.name} id={p.id} type={p.types} image ={p.image} />
        )})
      }


      
    </div>
  );
}
 