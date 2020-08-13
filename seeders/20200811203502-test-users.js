'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        email: "me@me.com",
        password: "test123",
        username: "meme",
        bio: "this is my bio",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "pete@peter.com",
        password: "test1234",
        username: "pete",
        bio: "this is my bio",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "gandalf@thegreat.com",
        password: "test1234",
        username: "greybeard",
        bio: "this is my bio",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('users', null, {});

  }
};
