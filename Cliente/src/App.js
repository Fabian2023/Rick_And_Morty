import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';  // 3. importe de Routes Route, 
import Detail from './components/Detail'
import About from './components/About';
import Form from './components/Component Form/Form'
import Favorites from './components/Favorites';


// const URL_BASE =  'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = 'ba0069f6ef45.0b53af4c93b360c20954'


const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
const navigate = useNavigate()
const location = useLocation() // se usa para renderizar el form , para que no aparezca Nav onsearch
const [characters, setCharacters] = useState([])  // asi se hace un estado local
const [access, setAccess]= useState(false);

const  login = async (userData) => {
   try {
      const { email, password } = userData;
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      
      setAccess(access);
      access && navigate('/home');
   
   }catch (error) {
   console.log(error.message);   
   }
}
   

useEffect (() =>{!access && navigate('/')},[access]) // el array de dependencias siempre debe estar para no generar bloqueos en la api
   
   const onSearch =  async(id) => {
      try {
         const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`) 
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      }catch (error) {
         alert('¡No hay personajes con este ID!');   
      }
   }
      

   const onClose = (id) =>{   // esto se hace asi por que la terea lo pide, el id se pasa por parametro

      const characterFiltered = characters.filter(character =>
         character.id != Number(id)) // aqui parcear o cambiar el id a numero, cosas raras

         setCharacters(characterFiltered) // piden depues setearlo


   }
   


   return ( // paso de propiedades de los componentes
      <div className='App'>
         {
            location.pathname !== '/' ? <Nav onSearch = {onSearch} /> :null // aqui no aparece nav y solo se ve el form
         }
         
         <Routes>
            <Route path = '/' element={<Form login={login}/>}/>
            <Route path ='/Home' element= {<Cards characters={characters} onClose={onClose}/> } />
            <Route path = '/About' element={<About/>}/>
            <Route path = '/Detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
