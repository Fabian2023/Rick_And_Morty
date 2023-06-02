const { DataTypes } = require('sequelize');

// define sirve para definir la tabla el siguiente perametro user el nombre de la tabla

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type:DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true 
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false,
      }




   }, { timestamps: false });
};
