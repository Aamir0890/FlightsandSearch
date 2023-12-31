'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  flights.init({
    flightNumber:{type:DataTypes.STRING,
    allowNull:false,
    unique:true
    } ,
    airplaneId: {type:DataTypes.INTEGER,
    allowNull:false
    },
    departureAirport:{type:DataTypes.INTEGER,
    allowNull:false} ,
    arrivalAirport: {type:DataTypes.INTEGER,
      allowNull:false} ,
    arrivalTime: {type:DataTypes.DATE,
    allowNull:false},
    departure: {type:DataTypes.DATE,
    allowNull:false},

    price: {type:DataTypes.INTEGER,allowNull:false},

    boardingGate: DataTypes.STRING,
    totalSeats: {type:DataTypes.INTEGER,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};