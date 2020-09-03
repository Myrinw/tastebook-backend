'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('food', [
      {
        restriction: "vegetarian",
        cuisine: "italian",
        alcohol: "yes",
        meal: "lunch",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        restriction: "none",
        cuisine: "mexican",
        alcohol: "yes",
        meal: "dinner",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        restriction: "keto",
        cuisine: "chinese",
        alcohol: "no",
        meal: "breakfast",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('food', null, {});
  }
};
