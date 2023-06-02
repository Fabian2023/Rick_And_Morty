import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState,  useEffect  } from 'react';

// const URL_BASE =  'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = 'ba0069f6ef45.0b53af4c93b360c20954'

const Detail = () => {
    const {id} = useParams()
    const [character,setCharacter]=useState({})


    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({}); 
     }, [id]);    

return (
    <div>
        <h2>{character?.name}</h2>
        <h2>{character?.status}</h2>
        <h2>{character?.species}</h2>
        <h2>{character?.gender}</h2>
        <h2>{character?.origin?.name}</h2>
        <img style={{borderRadius:'99999rem'}} src={character?.image} alt = {character?.name }/>       
    </div>
)

}

export default Detail