// se realiza la estructura basica del reducer, se empieza con el initialState y luego la fn reducer, con parametros state(inistate), action

// luego nos traemos las actions types

import { ADD_FAV,REMOVE_FAV } from "./actions-types"

const initialState ={
    myFavorites:[]

}

const reducer =(state = initialState, {type,payload})=>{
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:payload,
                allCharacters: payload
            }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: payload

            }    

        default:
            return {...state}
    }

}

export default reducer