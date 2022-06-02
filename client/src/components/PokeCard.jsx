import { Link } from 'react-router-dom';


export default function PokeCard({name, id, type}) {

 
  
  return (
      <div>
        <h2>id:{id}</h2>
        <h2>name:{name}</h2>
        <h3>type:{type}</h3>
      </div>
    
   
  )
}
