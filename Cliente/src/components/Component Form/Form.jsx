// el input tiene que ser igual estado y el estado tiene que ser igual al input, se bindea con value en el input

import style from './ComponentForm.module.css'
import { useState } from "react"
import validation from '../validation/validation'

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
    <div className={style.contenedor}> 
    <div className={style.backform}> 
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E mail</label>
            <input type="email" name='email' value={userData.email} onChange={handleChange}/> 
            <div className={style.error} >
            {errors.email && <p>{errors.email}</p>}
            </div>
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' value={userData.password}  onChange={handleChange}/> 
           <div className={style.pass}>
            {errors.password && <p>{errors.password}</p>}
            </div>
            <br/>
            <button className={style.submit} >submit</button>
        </form>
    </div>
    </div>
    )
}

export default Form