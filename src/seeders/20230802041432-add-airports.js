'use strict';

const { update } = require('../controllers/city-controller');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
             {
              name:'Kampegoda International Airport',
              cityId:5,
              createdAt: new Date(),
              updatedAt : new Date()
             }, {
              name:'Mysore Airport',
              cityId:5,
              createdAt: new Date(),
              updatedAt : new Date()
             }, {
              name:'Mengaluru International Airport',
              cityId:5,
              createdAt: new Date(),
              updatedAt : new Date()
             }, {
              name:'Indra Gandhi InternationalAirport',
              cityId:2,
              createdAt: new Date(),
              updatedAt : new Date()
             }], {})
         
            
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
