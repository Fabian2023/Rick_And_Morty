// el input tiene que ser igual estado y el estado tiene que ser igual al input, se bindea con value en el input

import { useState } from "react"
import validation from './validation/validation'

const Form =({login}) =>{
    const [errors, SetErrors]= useState({}) // estado local
    const[userData, SetUserData] = useState({
        email:'',
        password:''
    })

    const handleChange =(event)=>{               // recibe un evento trabaja con el onchange queda escuchando los cambios y esta funcion le avisa al estado del cambio
        SetUserData({
            ...userData,
            [event.target.name]:event.target.value   // genera dinamismo puede ser email o pass
        })
        SetErrors(validation({
            ...userData,
            [event.target.name]:event.target.value


        }))
    }

    const handleSubmit= (event) =>{
        event.preventDefault(); // esto evita que la pagina no se este recargando
        login(userData);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input type="email" name='email' value={userData.email} onChange={handleChange}/> 
            {errors.email && <p>{errors.email}</p>}
            <br/>
            <br/>
            <label htmlFor="password">password</label>
            <input type="text" name='password' value={userData.password}  onChange={handleChange}/> 
            {errors.password && <p>{errors.password}</p>}
            <br/>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default Form