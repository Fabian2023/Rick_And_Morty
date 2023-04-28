   import { useState } from "react";

export default function  SearchBar({onSearch}) {  

   const [id, setId] = useState('')   // ejercicio 6, id es el estado local

   const handleChange =(event) =>{
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search'  onChange ={handleChange}  value = {id}/>  
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>    
      </div>
   );
}
