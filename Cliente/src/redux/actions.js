//aqui se traen las actions types es lo primero

import { ADD_FAV,REMOVE_FAV } from "./actions-types";
import axios from "axios"

export const addFav = (character)=>{
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         try {
            const {data}= await axios.post(endpoint, character);

            if(!data.length) throw Error ('No hay Favoritos')

            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
         } catch (error) {
            console.log(error.message);
         }
      };
};

export const removeFav =(id)=>{
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async(dispatch) => {
      try {
         const {data} = await axios.delete(endpoint)

         if(!data.length) throw Error ('No hay Favoritos')

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      } catch (error) {
         console.log(error.message);
      }
       
      
    };
};

