const validation =(userData) =>{
    const errors = {};
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){ // validacion con regex, usando su propiedad test invocando al objeto con su propiedad email
        errors.email ='el email ingresado no es valido';
    }
    if(!userData.email){
        errors.email='debe ingresar un email'
    }
    if(userData.email.lenght>35){
        errors.email = 'el mail no debe superar los 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password='la constraseña debe contener al menos un numero'
    }
    if(userData.password.lenght < 6 || userData.password.lenght > 10){
        errors.password ='la contraseña debe tener entre 6 y 10 caracteres'
    }
    return errors
}
export default validation