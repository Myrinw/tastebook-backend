'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('food', [
      {
        restriction: "vegetarion",
        cuisine: "italian",
        alcohol: "yes",
        meal: "lunch",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('food', null, {});
  }
};
