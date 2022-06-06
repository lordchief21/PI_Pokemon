import { Link } from 'react-router-dom';


export default function PokeCard({name, id, type, image}) {

 
  
  return (
      <div>
        <img src={image} alt="#" />
        <h2>id:{id}</h2>
        <h2>name:{name}</h2>
        <h3>types:{type}</h3> 
      </div>
    
   
  )
}
