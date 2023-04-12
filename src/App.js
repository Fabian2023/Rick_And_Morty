import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav'
import { useState } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';  // 3. importe de Routes Route, 
import Detail from './components/Detail'
import About from './components/About';
import Form from './components/Form';

const URL_BASE =  'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'ba0069f6ef45.0b53af4c93b360c20954'

function App() {

   const [characters, setCharacters] = useState([])  // asi se hace un estado local
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
         
   }

   const onClose = (id) =>{   // esto se hace asi por que la terea lo pide, el id se pasa por parametro

      const characterFiltered = characters.filter(character =>
         character.id != Number(id)) // aqui pacear o cambiar el id a numero, cosas raras

         setCharacters(characterFiltered) // piden depues setearlo


   }
   


   return ( // paso de propiedades de los componentes
      <div className='App'>
         <Nav onSearch = {onSearch} /> 
         <Routes>
            <Route path ='/Home' element= {<Cards characters={characters} onClose={onClose}/> } />
            <Route path = '/About' element={<About/>}/>
            <Route path = '/Detail/:id' element={<Detail/>}/>
         </Routes>
         <Form/>
      
        
      </div>
   );
}

export default App;
