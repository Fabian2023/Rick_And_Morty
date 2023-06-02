const users = require('../utils/users')

const login = (req, res)=>{

    const {email, password}= req.query

    const userFinded = users.find((user)=> user.email === email && user.password === password  )
    return userFinded 
    ? res.status(200).json({access:true})
    :res.status(400).json({access:false})

}
module.exports= {
    login
}