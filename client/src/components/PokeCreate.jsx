import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { newPokemon, getTypes, getPokemons } from '../actions/index'

export default function PokeCreate() {

    const pokemonTypes = useSelector(state => state.types)

    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(getTypes());
      dispatch(getPokemons());
  },[dispatch])

    const [input, setInput] = React.useState({
        name: "",
        health: "",
        strength: "",
        defense: "",
        speed: "",
        height: "",
        weight:"",
        types: "",
        image: ""
      });

      const [errors, setErrors] = React.useState({});

      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
        }));
      }

      const handleSubmit = function(e) {
        e.preventDefault();
        newPokemon(input);
        console.log(input)
        setInput({
            name: "",
            health: "",
            strength: "",
            defense: "",
            speed: "",
            height: "",
            weight:"",
            types: "",
            image: "",
        });

      }

      return (
        <div className="form">
        <form className='list' onSubmit={handleSubmit}>
            <div>
              <label>Name: </label>
              <input className={errors.name && 'danger'} type="text" name="name" onChange={handleInputChange} value={input.name} />
              {errors.name && (
                <p className="danger">{errors.name}</p>
                )}

              <div>
              <label>health: </label>
              <input className={errors.health && 'danger'} type="number" name="health" onChange={handleInputChange} value={input.health}  placeholder='0 - 100'/>
              {errors.health && (
              <p className="danger">{errors.health}</p>
              )}

         <div>
              <label>Power: </label>
              <input className={errors.strength && 'danger'} type="number" name="strength" onChange={handleInputChange} value={input.strength} placeholder='0 - 100'/>
              {errors.strength && (
              <p className="danger">{errors.strength}</p>
              )}
         <div>
              <label>Defense: </label>
              <input className={errors.defense && 'danger'} type="number" name="defense" onChange={handleInputChange} value={input.defense}placeholder='0 - 100' />
              {errors.defense && (
              <p className="danger">{errors.defense}</p>
              )}

         <div>
              <label>Velocity: </label>
              <input className={errors.speed && 'danger'} type="number" name="velocity" onChange={handleInputChange} value={input.speed} placeholder='0 - 100'/>
              {errors.speed && (
              <p className="danger">{errors.velocity}</p>
              )}

         <div>
              <label>Height: </label>
              <input className={errors.height && 'danger'} type="number" name="height" onChange={handleInputChange} value={input.height} placeholder='0 - 100' />
              {errors.height && (
              <p className="danger">{errors.height}</p>
              )}

         <div>
              <label>Weight: </label>
              <input className={errors.weigth && 'danger'} type="number" name="weight" onChange={handleInputChange} value={input.weight} placeholder='0 - 100'/>
              {errors.weight && (
              <p className="danger">{errors.weight}</p>
              )}
              <br/>
              <span>Type: </span>
              <select className={errors.types && "type"} name="type" value={input.ID} onChange={handleInputChange}>
                    <option value='null'>Null</option>
                    {pokemonTypes && pokemonTypes.map(p => (
                    <option value={p.id} name="p.name">{p.name}</option>
                    ))}
                    {errors.types && (
                    <p className="tipe">{errors.types}</p>
                    )}
                </select>
                <br/>  
            </div>
            </div>  
            </div>
            </div>
            </div>
            </div>
            </div>
            <button className="button" onClick={()=>dispatch(newPokemon(input))}>CREATE</button>
          </form>
          </div>
        )
} 

 export function validate(input) {
    const pattern = new RegExp('^[A-Z]+$', 'i');
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } else if (!pattern.test(input.name)) {
      errors.name = 'Name must contain letters only';
    }
    if (!input.life) {
      errors.life = 'Life is required';
    } else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.life)) {
      errors.life = 'Life must be between 1 and 100';
    }
    if (!input.power) {
      errors.power = 'Power is required';
    } else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.power)) {
      errors.power = 'Power must be between 1 and 100';
    }
    if (!input.defense) {
      errors.defense = 'Defense is required';
    } else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.defense)) {
      errors.defense = 'Defense must be between 1 and 100';
    }
    if (!input.velocity) {
      errors.velocity = 'Velocity is required';
    } else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.velocity)) {
      errors.velocity = 'Velocity must be between 1 and 100';
    }
    if (!input.height) {
      errors.height = 'Heigth is required';
    } else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.height)) {
      errors.height = 'Heigth must be between 1 and 100';
    }
    if (!input.weight) {
      errors.weight = 'Weigth is required';
    } else if (!/^([0-9]|[1-9][0-9]|100)$/.test(input.weight)) {
      errors.weight = 'Weigth must be between 1 and 100';
    }
    if (!input.types || input.types === "null") {
      errors.types = 'Type can not be null';
    } 
    return errors;
};









// import React from "react";
// import { useState, useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link,useNavigate } from "react-router-dom";
// import { postPokemon,getTypes } from "../actions";



// export default function PokeCreate() {

//     const dispatch = useDispatch();
//     const types = useSelector((state) => state.types);
//     const navigate = useNavigate();

    

//     const [input, setInput] = useState({

        // name: "",
        // health: "",
        // strength: "",
        // defense: "",
        // speed: "",
        // height: "",
        // weight:"",
        // types: [],
        // image: ""

//     });


   

//     //El useEffect

//     useEffect(() => {
//         dispatch(getTypes())},
//         [dispatch]
//     );


//     //Manejo de Handlers


//     function handlerInputChange(n) {
//         setInput({
//             ...input,
//             [n.target.name]: n.target.value
//         })
//     }


//     const handlerSelectTypes = (e) => {
//         setInput({
//             ...input,
//             types: [...input.types, e.target.value]
        
//         })
       
//     };

//     function handleSubmit(e){
//         e.preventDefault();
        
//                 dispatch( postPokemon(input))
//                 setInput({
//                     name: "",
//                     health: "",
//                     strength: "",
//                     defense: "",
//                     speed: "",
//                     height: "",
//                     weight:"",
//                     types: [],
//                     image: "", 
//                 })
//                 alert('Pokemon created successfully')
                
//         }
        


//     return ( 
//         <div>
//             <div>
//                 <Link to = '/' ><button>Volver</button></Link>
//                 <h2>Generemos la nueva Raza de Pokemon</h2>
//             </div>
//             <form  onSubmit={e =>handleSubmit(e)}>
//                 <div>
//                     <label>name: </label>
//                     <input 
//                     type="text"
//                     value={input.name}
//                     name = "name"
//                     onChange={n=>handlerInputChange(n)}
//                     />
//                 </div>
//                 <div>
//                     <label>Health: </label>
//                     <input 
//                     type="number"
//                     value={input.health}
//                     name = "health"
                    
//                     onChange={n => handlerInputChange(n)}
//                     />
//                 </div>
//                 <div>
//                     <label>Strength: </label>
//                     <input 
//                     type="number"
//                     value={input.strength}
//                     name = "strength"
                   
//                     onChange={n => handlerInputChange(n)}
//                     />
//                 </div>
//                 <div>
//                     <label>Defense: </label>
//                     <input 
//                     type="number"
//                     value={input.defense}
//                     name = "defense"
                    
//                     onChange={n => handlerInputChange(n)}
//                     />
//                 </div>
//                 <div>
//                     <label>Speed: </label>
//                     <input 
//                     type="number"
//                     value={input.speed}
//                     name = "speed"
                   
//                     onChange={n => handlerInputChange(n)}
//                     />
//                 </div>
//                 <div>
//                     <label>Height: </label>
//                     <input 
//                     type="number"
//                     value={input.height}
//                     name = "height"
                    
//                     onChange={n => handlerInputChange(n)}
//                     />
//                 </div>
//                 <div>
//                     <label>Weight: </label>
//                     <input 
//                     type="number"
//                     value={input.weight}
//                     name = "weight"
                    
//                     onChange={n => handlerInputChange(n)}
//                     />
//                 </div>
//                 <div>
//                     <label>image: </label>
//                     <input 
//                     type="text"
//                     value={input.image}
//                     name = "image"
                    
//                     onChange={n => handlerInputChange(n)}
//                     />
//                 </div>
//                 <div>
//                     <select  onChange={(e) => handlerSelectTypes(e)}>
                        
//                     {
//                         types?.map(t => (
//                             <option value={t.name}>{t.name}</option>
                            
//                         ))
//                     }
//                     </select>
//                     <p> You pokemon is type: { input.types.map( e => e + ", ")}</p>
//                 </div>
//                 <button type="submit" onClick={e => handleSubmit(e)}>Crear</button>
                
//             </form>

        
//         </div>
//     );
// }
