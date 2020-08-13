'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('comments', [
      {
        text: "Lovely post!",
        userId: 2,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "I like this recipe!!",
        userId: 2,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Nice",
        userId: 1,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});

  }
};
